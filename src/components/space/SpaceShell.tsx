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
import {
  MK_SPOTIFY_EMBED,
  MK_SPOTIFY_URI,
  playSfx,
  unlockAudio,
} from "./spaceAudio";

type SlideId = SpacePanelId | `work-${string}`;

type SpotifyEmbedController = {
  play: () => void;
  pause: () => void;
  loadUri: (uri: string) => void;
};

type SpotifyIFrameApi = {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: string; height?: string },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameApi) => void;
    __spotifyIframeApi?: SpotifyIFrameApi;
  }
}

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
  const spotifyHostRef = useRef<HTMLDivElement>(null);
  const spotifyCtrl = useRef<SpotifyEmbedController | null>(null);
  const lastHoverAt = useRef(0);

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
      { id: "path", nav: "path", label: dict.nav.path.label },
      { id: "connect", nav: "connect", label: dict.nav.connect.label },
    ];
    return list;
  }, [dict]);

  const [active, setActive] = useState<SlideId>("presence");
  const [entered, setEntered] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const [sfxOn, setSfxOn] = useState(true);
  const [playerOpen, setPlayerOpen] = useState(false);

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
    };
  }, []);

  useEffect(() => {
    const existing = document.querySelector(
      'script[data-spotify-iframe-api="1"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    script.dataset.spotifyIframeApi = "1";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let bound = false;

    const bind = (api: SpotifyIFrameApi) => {
      const host = spotifyHostRef.current;
      if (!host || cancelled || bound || spotifyCtrl.current) return;
      bound = true;
      api.createController(
        host,
        { uri: MK_SPOTIFY_URI, width: "100%", height: "152" },
        (controller) => {
          if (cancelled) return;
          spotifyCtrl.current = controller;
        }
      );
    };

    if (window.__spotifyIframeApi) {
      bind(window.__spotifyIframeApi);
      return () => {
        cancelled = true;
      };
    }

    const prev = window.onSpotifyIframeApiReady;
    window.onSpotifyIframeApiReady = (api) => {
      window.__spotifyIframeApi = api;
      prev?.(api);
      bind(api);
    };

    return () => {
      cancelled = true;
    };
  }, []);

  const activeRef = useRef<SlideId>("presence");
  const sfxRef = useRef({ sfxOn, entered });
  sfxRef.current = { sfxOn, entered };

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
        const id = visible.target.getAttribute("data-slide-id") as SlideId | null;
        if (!id || id === activeRef.current) return;
        activeRef.current = id;
        setActive(id);
        playSfx("snap", sfxRef.current.sfxOn && sfxRef.current.entered);
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
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollToNav = useCallback(
    (nav: SpacePanelId) => {
      const target = slides.find((s) => s.nav === nav);
      if (target) scrollTo(target.id);
    },
    [scrollTo, slides]
  );

  const enter = useCallback(async () => {
    await unlockAudio();
    setEntered(true);
    playSfx("click", true);
    if (musicOn) {
      try {
        spotifyCtrl.current?.play();
      } catch {
        // Browser may still block; visitor can use the player.
      }
    }
  }, [musicOn]);

  const onInteractiveHover = useCallback(() => {
    if (!entered || !sfxOn) return;
    const now = performance.now();
    if (now - lastHoverAt.current < 90) return;
    lastHoverAt.current = now;
    playSfx("hover", true);
  }, [entered, sfxOn]);

  const onInteractiveClick = useCallback(() => {
    if (!entered || !sfxOn) return;
    playSfx("click", true);
  }, [entered, sfxOn]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!entered) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          void enter();
        }
        return;
      }
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
  }, [active, enter, entered, scrollTo, slides]);

  useEffect(() => {
    if (!entered || !spotifyCtrl.current) return;
    if (musicOn) spotifyCtrl.current.play();
    else spotifyCtrl.current.pause();
  }, [musicOn, entered]);

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

      {!entered ? (
        <button
          type="button"
          className="space-enter"
          onClick={() => void enter()}
          aria-label={dict.audio.enter}
        >
          <span className="space-enter-mark">
            <Image
              src="/hoodCat.png"
              alt=""
              width={72}
              height={72}
              className="space-enter-cat"
              priority
            />
          </span>
          <span className="space-enter-brand">{dict.brand}</span>
          <span className="space-enter-cta">{dict.audio.enter}</span>
          <span className="space-enter-hint">{dict.audio.enterHint}</span>
        </button>
      ) : null}

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
            className={cn("space-chip", musicOn && "is-on")}
            onClick={() => {
              onInteractiveClick();
              setMusicOn((v) => !v);
            }}
            onMouseEnter={onInteractiveHover}
            aria-pressed={musicOn}
          >
            {musicOn ? dict.audio.musicOn : dict.audio.musicOff}
          </button>
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

          <Slide id="path">
            <PathStage dict={dict} />
          </Slide>

          <Slide id="connect">
            <ConnectStage
              dict={dict}
              onHover={onInteractiveHover}
              onClick={onInteractiveClick}
            />
          </Slide>
        </div>
      </main>

      <aside
        className={cn("space-player", playerOpen && "is-open")}
        aria-hidden={!playerOpen}
      >
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
        <div ref={spotifyHostRef} className="space-spotify-host" />
        <noscript>
          <iframe
            title="Spotify"
            src={MK_SPOTIFY_EMBED}
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </noscript>
      </aside>

      <footer className="space-bottom-rail">
        <span className="space-bottom-mark">
          <Image
            src="/hoodCat.png"
            alt=""
            width={22}
            height={22}
            className="space-bottom-cat"
            data-space-safe
          />
        </span>
      </footer>
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
  return (
    <div className="space-skills">
      <div className="space-skills-inner">
        {dict.skills.groups.map((g) => (
          <section key={g.title} className="space-skill-group">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => (
                <li key={item.name} className="space-skill-chip">
                  <span className="space-skill-icon">
                    <Image
                      src={item.src}
                      alt=""
                      width={28}
                      height={28}
                      className="space-skill-img"
                      data-space-safe
                    />
                  </span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function PathStage({ dict }: { dict: SpaceDict }) {
  return (
    <div className="space-path">
      <ol className="space-path-list">
        {dict.path.entries.map((e) => (
          <li
            key={e.org + e.period}
            className={cn("space-path-entry", e.image && "has-media")}
          >
            {e.image ? (
              <div className="space-path-media">
                <Image
                  src={e.image}
                  alt=""
                  fill
                  className="space-path-img"
                  sizes="160px"
                />
              </div>
            ) : null}
            <div className="space-path-body">
              <div className="space-path-meta">
                <span className="space-path-org">{e.org}</span>
                <span className="space-path-period">{e.period}</span>
              </div>
              <p className="space-path-role">{e.role}</p>
              <ul>
                {e.points.map((pt) => (
                  <li key={pt.slice(0, 32)}>{pt}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
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
      <ul className="space-connect-list">
        {dict.connect.links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="space-connect-item"
              onMouseEnter={onHover}
              onClick={onClick}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="space-connect-label">{l.label}</span>
              {l.note ? (
                <span className="space-connect-note">{l.note}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
