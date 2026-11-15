"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpaceDict, SpacePanelId } from "@/dictionaries/space";
import { cn } from "@/lib/utils";

const PANEL_ORDER: SpacePanelId[] = [
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
  const [panel, setPanel] = useState<SpacePanelId>("presence");
  const otherLang = lang === "ja" ? "en" : "ja";

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

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      const i = PANEL_ORDER.indexOf(panel);
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setPanel(PANEL_ORDER[(i + 1) % PANEL_ORDER.length]);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setPanel(PANEL_ORDER[(i - 1 + PANEL_ORDER.length) % PANEL_ORDER.length]);
      }
    },
    [panel]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

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
        <Link href={`/${lang}`} className="space-brand-lockup" onClick={() => setPanel("presence")}>
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
        <Link href={`/${otherLang}`} className="space-lang">
          {dict.langSwitch[otherLang]}
        </Link>
      </header>

      <nav className="space-left-dock" aria-label="Rooms">
        {PANEL_ORDER.map((id) => {
          const active = id === panel;
          return (
            <button
              key={id}
              type="button"
              className={cn("space-dock-btn", active && "is-active")}
              onClick={() => setPanel(id)}
              aria-current={active ? "page" : undefined}
              title={dict.nav[id].label}
            >
              <span className="space-dock-short">{dict.nav[id].short}</span>
              <span className="space-dock-label">{dict.nav[id].label}</span>
            </button>
          );
        })}
      </nav>

      <main className="space-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={panel}
            className="space-stage-scroll"
            initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {panel === "presence" && (
              <PresenceStage dict={dict} onWorks={() => setPanel("works")} onConnect={() => setPanel("connect")} />
            )}
            {panel === "about" && <AboutStage dict={dict} />}
            {panel === "works" && <WorksStage dict={dict} />}
            {panel === "skills" && <SkillsStage dict={dict} />}
            {panel === "path" && <PathStage dict={dict} />}
            {panel === "connect" && <ConnectStage dict={dict} />}
          </motion.div>
        </AnimatePresence>
      </main>

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

function PresenceStage({
  dict,
  onWorks,
  onConnect,
}: {
  dict: SpaceDict;
  onWorks: () => void;
  onConnect: () => void;
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
          <button type="button" className="space-cta" onClick={onWorks}>
            {p.ctaWorks}
          </button>
          <button type="button" className="space-cta space-cta-ghost" onClick={onConnect}>
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
  );
}

function WorksStage({ dict }: { dict: SpaceDict }) {
  return (
    <div className="space-works">
      <ul className="space-work-rows">
        {dict.works.items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="space-work-row"
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="space-work-media">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="space-work-img"
                  sizes="(max-width: 900px) 40vw, 280px"
                  unoptimized={
                    item.image.endsWith(".gif") || item.image.endsWith(".png")
                  }
                />
              </span>
              <span className="space-work-meta">
                <span className="space-work-title">{item.title}</span>
                <span className="space-work-period">{item.period}</span>
                <span className="space-work-concept">{item.concept}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillsStage({ dict }: { dict: SpaceDict }) {
  return (
    <div className="space-skills">
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
  );
}

function PathStage({ dict }: { dict: SpaceDict }) {
  return (
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
  );
}

function ConnectStage({ dict }: { dict: SpaceDict }) {
  return (
    <ul className="space-connect-list">
      {dict.connect.links.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="space-connect-item"
            {...(l.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="space-connect-label">{l.label}</span>
            {l.note ? <span className="space-connect-note">{l.note}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}
