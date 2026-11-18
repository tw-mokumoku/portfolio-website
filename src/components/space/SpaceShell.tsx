"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SpaceDict, SpacePanelId } from "@/dictionaries/space";
import { cn } from "@/lib/utils";
import { MK_SPOTIFY_EMBED, playSfx, unlockAudio } from "./spaceAudio";

type SlideId = SpacePanelId | `work-${string}` | `path-${string}`;

const CORE_ORDER: SpacePanelId[] = [
  "presence",
  "about",
  "works",
  "skills",
  "path",
  "connect",
];

export function SpaceShell({
  dict,
  lang,
}: {
  dict: SpaceDict;
  lang: "ja" | "en";
}) {
  const otherLang = lang === "ja" ? "en" : "ja";
  const reelRef = useRef<HTMLDivElement>(null);
  const lastHoverAt = useRef(0);
  const activeRef = useRef<SlideId>("presence");
  const sfxRef = useRef(true);
  const programmaticScrollRef = useRef(false);
  const programmaticTimerRef = useRef<number | null>(null);

  const slides = useMemo(() => {
    const list: { id: SlideId; nav: SpacePanelId; label: string }[] = [
      { id: "presence", nav: "presence", label: dict.nav.presence.label },
      { id: "about", nav: "about", label: dict.nav.about.label },
      ...dict.works.items.map((item) => ({
        id: `work-${item.id}` as SlideId,
        nav: "works" as const,
        label: item.title,
      })),
      { id: "skills", nav: "skills", label: dict.nav.skills.label },
      ...dict.path.entries.map((entry) => ({
        id: `path-${entry.id}` as SlideId,
        nav: "path" as const,
        label: entry.org,
      })),
      { id: "connect", nav: "connect", label: dict.nav.connect.label },
    ];
    return list;
  }, [dict]);

  const [active, setActive] = useState<SlideId>("presence");
  const [sfxOn, setSfxOn] = useState(true);
  const [playerOpen, setPlayerOpen] = useState(false);
  sfxRef.current = sfxOn;

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      if (programmaticTimerRef.current != null) {
        window.clearTimeout(programmaticTimerRef.current);
      }
    };
  }, []);

  // Keep each slide exactly one reel viewport tall (prevents height feedback growth).
  useEffect(() => {
    const root = reelRef.current;
    if (!root) return;

    const syncSlideHeights = () => {
      const h = root.clientHeight;
      if (h <= 0) return;
      root.querySelectorAll<HTMLElement>("[data-slide-id]").forEach((el) => {
        el.style.height = `${h}px`;
        el.style.minHeight = `${h}px`;
        el.style.maxHeight = `${h}px`;
      });
    };

    syncSlideHeights();
    const ro = new ResizeObserver(syncSlideHeights);
    ro.observe(root);
    window.addEventListener("resize", syncSlideHeights);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncSlideHeights);
    };
  }, [slides]);

  useEffect(() => {
    const root = reelRef.current;
    if (!root) return;

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("[data-slide-id]")
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = visible.target.getAttribute(
          "data-slide-id"
        ) as SlideId | null;
        if (!id || id === activeRef.current) return;
        activeRef.current = id;
        setActive(id);
        // Skip snap bursts while dock/keyboard drives smooth reel motion.
        if (programmaticScrollRef.current) return;
        playSfx("snap", sfxRef.current);
      },
      { root, threshold: [0.6] }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [slides]);

  const scrollTo = useCallback((id: SlideId) => {
    const root = reelRef.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(`[data-slide-id="${id}"]`);
    if (!el) return;
    // Scroll only the reel — scrollIntoView can walk ancestors and hide the HUD.
    programmaticScrollRef.current = true;
    if (programmaticTimerRef.current != null) {
      window.clearTimeout(programmaticTimerRef.current);
    }
    const top =
      el.getBoundingClientRect().top -
      root.getBoundingClientRect().top +
      root.scrollTop;
    root.scrollTo({ top, behavior: "smooth" });
    programmaticTimerRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false;
      programmaticTimerRef.current = null;
    }, 700);
  }, []);

  const scrollToNav = useCallback(
    (nav: SpacePanelId) => {
      const target = slides.find((s) => s.nav === nav);
      if (target) scrollTo(target.id);
    },
    [scrollTo, slides]
  );

  const onInteractiveHover = useCallback(() => {
    if (!sfxOn) return;
    const now = performance.now();
    if (now - lastHoverAt.current < 90) return;
    lastHoverAt.current = now;
    void unlockAudio();
    playSfx("hover", true);
  }, [sfxOn]);

  const onInteractiveClick = useCallback(() => {
    if (!sfxOn) return;
    void unlockAudio();
    playSfx("click", true);
  }, [sfxOn]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const i = slides.findIndex((s) => s.id === active);
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const next = slides[Math.min(i + 1, slides.length - 1)];
        if (next) scrollTo(next.id);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prev = slides[Math.max(i - 1, 0)];
        if (prev) scrollTo(prev.id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, scrollTo, slides]);

  const activeNav =
    slides.find((s) => s.id === active)?.nav ?? ("presence" as SpacePanelId);

  return (
    <div className="space-root">
      <div className="space-atmosphere" aria-hidden>
        <div className="space-aurora space-aurora-a" />
        <div className="space-aurora space-aurora-b" />
        <div className="space-red-mist" />
        <div className="space-noise" />
        <div className="space-vignette" />
        <div className="space-film" />
      </div>

      <header className="space-top-rail">
        <Link
          href={`/${lang}`}
          className="space-brand-lockup"
          onClick={(e) => {
            onInteractiveClick();
            e.preventDefault();
            scrollTo("presence");
          }}
          onMouseEnter={onInteractiveHover}
        >
          <span className="space-brand-mark">
            <Image
              src="/hoodCat.png"
              alt=""
              width={36}
              height={36}
              className="space-brand-cat"
              priority
              data-space-safe
            />
          </span>
          <span className="space-brand">{dict.brand}</span>
        </Link>
        <div className="space-top-spacer" />
        <div className="space-audio-controls">
          <button
            type="button"
            className={cn("space-chip", sfxOn && "is-on")}
            onClick={() => {
              onInteractiveClick();
              setSfxOn((v) => !v);
            }}
            onMouseEnter={onInteractiveHover}
            aria-pressed={sfxOn}
          >
            {sfxOn ? dict.audio.sfxOn : dict.audio.sfxOff}
          </button>
          <button
            type="button"
            className={cn("space-chip", playerOpen && "is-on")}
            onClick={() => {
              onInteractiveClick();
              setPlayerOpen((v) => !v);
            }}
            onMouseEnter={onInteractiveHover}
            aria-expanded={playerOpen}
          >
            {dict.audio.playlist}
          </button>
        </div>
        <Link
          href={`/${otherLang}`}
          className="space-lang"
          onMouseEnter={onInteractiveHover}
          onClick={onInteractiveClick}
        >
          {dict.langSwitch[otherLang]}
        </Link>
      </header>

      <nav className="space-left-dock" aria-label="Sections">
        {CORE_ORDER.map((id) => {
          const on = id === activeNav;
          return (
            <button
              key={id}
              type="button"
              className={cn("space-dock-btn", on && "is-active")}
              onClick={() => {
                onInteractiveClick();
                scrollToNav(id);
              }}
              onMouseEnter={onInteractiveHover}
              aria-current={on ? "page" : undefined}
              title={dict.nav[id].label}
            >
              <span className="space-dock-dot" aria-hidden />
              <span className="space-dock-short">{dict.nav[id].short}</span>
              <span className="space-dock-label">{dict.nav[id].label}</span>
            </button>
          );
        })}
      </nav>

      <main className="space-stage">
        <div className="space-reel" ref={reelRef}>
          <Slide id="presence">
            <PresenceStage
              dict={dict}
              onWorks={() => {
                onInteractiveClick();
                scrollToNav("works");
              }}
              onConnect={() => {
                onInteractiveClick();
                scrollToNav("connect");
              }}
              onHover={onInteractiveHover}
            />
          </Slide>

          <Slide id="about">
            <AboutStage dict={dict} />
          </Slide>

          {dict.works.items.map((item) => (
            <Slide key={item.id} id={`work-${item.id}`}>
              <WorkSlide
                item={item}
                onHover={onInteractiveHover}
                onClick={onInteractiveClick}
              />
            </Slide>
          ))}

          <Slide id="skills">
            <SkillsStage dict={dict} />
          </Slide>

          {dict.path.entries.map((entry) => (
            <Slide key={entry.id} id={`path-${entry.id}`}>
              <PathSlide entry={entry} />
            </Slide>
          ))}

          <Slide id="connect">
            <ConnectStage
              dict={dict}
              onHover={onInteractiveHover}
              onClick={onInteractiveClick}
            />
          </Slide>
        </div>
      </main>

      {playerOpen ? (
        <aside className="space-player is-open" aria-label={dict.audio.playlist}>
          <div className="space-player-head">
            <span>{dict.audio.playlist}</span>
            <button
              type="button"
              className="space-chip"
              onClick={() => {
                onInteractiveClick();
                setPlayerOpen(false);
              }}
            >
              {dict.audio.close}
            </button>
          </div>
          <iframe
            title="Spotify"
            className="space-spotify-frame"
            src={MK_SPOTIFY_EMBED}
            width="100%"
            height="152"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </aside>
      ) : null}
    </div>
  );
}

function Slide({ id, children }: { id: SlideId; children: ReactNode }) {
  return (
    <section className="space-slide" data-slide-id={id}>
      {children}
    </section>
  );
}

function PresenceStage({
  dict,
  onWorks,
  onConnect,
  onHover,
}: {
  dict: SpaceDict;
  onWorks: () => void;
  onConnect: () => void;
  onHover: () => void;
}) {
  const p = dict.presence;
  return (
    <div className="space-presence">
      <div className="space-presence-art">
        <div className="space-presence-glow" aria-hidden />
        <div className="space-presence-frame">
          <Image
            src="/hoodCat.png"
            alt={dict.brand}
            width={640}
            height={640}
            className="space-presence-cat"
            priority
          />
        </div>
        <div className="space-presence-shard space-presence-shard-a" aria-hidden />
        <div className="space-presence-shard space-presence-shard-b" aria-hidden />
      </div>
      <div className="space-presence-copy">
        <p className="space-presence-aka">{p.aka}</p>
        <h1 className="space-presence-name">{p.name}</h1>
        <p className="space-presence-role">{p.role}</p>
        <p className="space-presence-line">{p.line}</p>
        <div className="space-presence-actions">
          <button
            type="button"
            className="space-cta"
            onClick={onWorks}
            onMouseEnter={onHover}
          >
            {p.ctaWorks}
          </button>
          <button
            type="button"
            className="space-cta space-cta-ghost"
            onClick={onConnect}
            onMouseEnter={onHover}
          >
            {p.ctaConnect}
          </button>
        </div>
      </div>
    </div>
  );
}

function AboutStage({ dict }: { dict: SpaceDict }) {
  return (
    <div className="space-about">
      <div className="space-about-inner">
        <div className="space-about-portrait">
          <Image
            src="/hoodCat.png"
            alt=""
            width={160}
            height={160}
            className="space-about-cat"
            data-space-safe
          />
        </div>
        <div className="space-about-copy">
          {dict.about.paras.map((para) => (
            <p key={para.slice(0, 28)}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkSlide({
  item,
  onHover,
  onClick,
}: {
  item: SpaceDict["works"]["items"][number];
  onHover: () => void;
  onClick: () => void;
}) {
  return (
    <Link
      href={item.href}
      className="space-work-slide"
      onMouseEnter={onHover}
      onClick={onClick}
      {...(item.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="space-work-slide-media">
        <Image
          src={item.image}
          alt=""
          fill
          className="space-work-slide-img"
          sizes="100vw"
          unoptimized={
            item.image.endsWith(".gif") || item.image.endsWith(".png")
          }
          priority={item.id === "chill"}
        />
        <span className="space-work-slide-shade" aria-hidden />
      </span>
      <span className="space-work-slide-meta">
        <span className="space-work-kicker">Work</span>
        <span className="space-work-title">{item.title}</span>
        <span className="space-work-period">{item.period}</span>
        <span className="space-work-concept">{item.concept}</span>
      </span>
    </Link>
  );
}

function SkillsStage({ dict }: { dict: SpaceDict }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const inner = innerRef.current;
    if (!frame || !inner) return;

    const fit = () => {
      // Measure unscaled, then scale+translate so the painted board centers in frame.
      // (CSS zoom origin is top-left; plain scale without translate also drifts left.)
      inner.style.zoom = "";
      inner.style.transform = "none";
      const availH = frame.clientHeight;
      const availW = frame.clientWidth;
      const needH = inner.scrollHeight;
      const needW = inner.scrollWidth;
      if (availH <= 0 || needH <= 0) return;
      const byH = needH > availH ? availH / needH : 1;
      const byW = needW > availW ? availW / needW : 1;
      const scale = Math.max(0.58, Math.min(byH, byW, 1));
      inner.style.transformOrigin = "top left";
      const paintedW = needW * scale;
      const paintedH = needH * scale;
      const dx = Math.max(0, (availW - paintedW) / 2);
      const dy = Math.max(0, (availH - paintedH) / 2);
      inner.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(frame);
    ro.observe(inner);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [dict.skills.groups]);

  return (
    <div className="space-skills" ref={frameRef}>
      <div className="space-skills-inner" ref={innerRef}>
        <header className="space-skills-head">
          <span className="space-work-kicker">{dict.nav.skills.label}</span>
          <p className="space-skills-count">
            {dict.skills.groups.reduce((n, g) => n + g.items.length, 0)}
          </p>
        </header>
        {dict.skills.groups.map((g) => (
          <section key={g.title} className="space-skill-group">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => {
                const mark =
                  item.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() ||
                  item.name.slice(0, 1);
                return (
                  <li key={item.name} className="space-skill-chip">
                    <span className="space-skill-icon" aria-hidden>
                      {item.src ? (
                        <Image
                          src={item.src}
                          alt=""
                          width={40}
                          height={40}
                          className="space-skill-img"
                          data-space-safe
                        />
                      ) : (
                        <span className="space-skill-mono">{mark}</span>
                      )}
                    </span>
                    <span>{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function PathSlide({
  entry,
}: {
  entry: SpaceDict["path"]["entries"][number];
}) {
  const mark = entry.org.replace(/[^A-Za-z0-9\u3040-\u30ff\u4e00-\u9fff]/g, "").slice(0, 2) || "道";
  return (
    <div className="space-path-slide">
      <div className="space-path-slide-media">
        {entry.image ? (
          <Image
            src={entry.image}
            alt=""
            fill
            className="space-path-slide-img"
            sizes="100vw"
            unoptimized={entry.image.endsWith(".png")}
            priority={entry.id === "sharedine"}
          />
        ) : (
          <div className="space-path-slide-mono" aria-hidden>
            <span>{mark}</span>
          </div>
        )}
        <div className="space-path-slide-shade" aria-hidden />
      </div>
      <div className="space-path-slide-meta">
        <span className="space-work-kicker">Path</span>
        <span className="space-work-title">{entry.org}</span>
        <span className="space-work-period">{entry.period}</span>
        <span className="space-path-slide-role">{entry.role}</span>
        <ul className="space-path-slide-points">
          {entry.points.map((pt) => (
            <li key={pt.slice(0, 32)}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ConnectStage({
  dict,
  onHover,
  onClick,
}: {
  dict: SpaceDict;
  onHover: () => void;
  onClick: () => void;
}) {
  return (
    <div className="space-connect">
      <div className="space-connect-inner">
        <p className="space-connect-title">{dict.connect.title}</p>
        <ul className="space-connect-grid">
          {dict.connect.links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="space-connect-card"
                onMouseEnter={onHover}
                onClick={onClick}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <span className="space-connect-mark" aria-hidden>
                  {l.icon ? (
                    <Image
                      src={l.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="space-connect-icon"
                      data-space-safe
                    />
                  ) : (
                    l.mark
                  )}
                </span>
                <span className="space-connect-copy">
                  <span className="space-connect-label">{l.label}</span>
                  {l.note ? (
                    <span className="space-connect-note">{l.note}</span>
                  ) : null}
                </span>
                <span className="space-connect-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
