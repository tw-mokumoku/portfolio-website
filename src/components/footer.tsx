import { IFooter } from "@/interface/footer";
import Link from "next/link";

export function Footer({ footer }: { footer: IFooter }) {
  return (
    <div
      className="relative w-full max-w-full min-w-0 min-h-[260px] lg:h-[250px] lg:min-h-0"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative max-w-full min-w-0 lg:-top-[100vh] lg:min-h-[calc(100vh+250px)]">
        <div
          className="sticky top-[calc(100vh-260px)] w-full max-w-full min-w-0 overflow-y-auto min-h-[260px] h-auto border-t border-white/5 bg-[#45444f] shadow-[0_-4px_24px_rgba(0,0,0,0.35)] lg:top-[calc(100vh-250px)] lg:h-[250px] lg:min-h-[250px] lg:overflow-y-visible"
          style={{ backgroundColor: "#45444f" }}
        >
          <Content footer={footer} />
        </div>
      </div>
    </div>
  );
}

export default function Content({ footer }: { footer: IFooter }) {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 max-w-full flex-col justify-between bg-[#4E4E5A] px-4 py-5 sm:px-6 md:px-10 lg:px-12">
      <Nav footer={footer} />
      <div className="mt-5 flex shrink-0 justify-end border-t border-white/10 pt-4 lg:mt-0 lg:border-0 lg:pt-0">
        <p className="text-xs text-white/90 sm:text-sm">© 2025 Takushi Watanabe</p>
      </div>
    </div>
  );
}

const linkClass =
  "block w-full max-w-full min-w-0 break-words text-sm text-white/95 underline-offset-2 hover:underline sm:text-base";

const Nav = ({ footer }: { footer: IFooter }) => {
  return (
    <>
      {/* Narrow viewports: single column stack — no multi-column flex that can overflow */}
      <nav className="w-full min-w-0 max-w-full lg:hidden" aria-label="Footer navigation (compact)">
        <div className="flex flex-col gap-6">
          <section className="min-w-0">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ffffff80]">
              {footer.nav.overviewSection.title}
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className={linkClass} href="/">
                  {footer.nav.overviewSection.home}
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/#anchor_greet">
                  {footer.nav.overviewSection.greeting}
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/#anchor_skill">
                  {footer.nav.overviewSection.skills}
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="/#anchor_job">
                  {footer.nav.overviewSection.experience}
                </Link>
              </li>
            </ul>
          </section>

          <section className="min-w-0 border-t border-white/10 pt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ffffff80]">
              {footer.nav.worksSection.title}
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className={linkClass} href="/chill">
                  {footer.nav.worksSection.chillMusic}
                </Link>
              </li>
              <li>
                <Link
                  className={linkClass}
                  href="https://qiita.com/mk-mokumoku/items/0695081d892a8e175995"
                >
                  {footer.nav.worksSection.lifelineApp}
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="https://github.com/tw-mokumoku/portfolio1">
                  {footer.nav.worksSection.discordBulletinBoard}
                </Link>
              </li>
            </ul>
          </section>

          <section className="min-w-0 border-t border-white/10 pt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#ffffff80]">
              SNS
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className={linkClass} href="https://github.com/tw-mokumoku">
                  GitHub
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="https://qiita.com/mk-mokumoku">
                  Qiita
                </Link>
              </li>
              <li>
                <Link
                  className={linkClass}
                  href="https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="https://discord.gg/BF6z7Dw9">
                  Discord
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="https://x.com/mk_mokumoku">
                  X（Twitter）
                </Link>
              </li>
              <li>
                <Link className={linkClass} href="mailto:takushi.watanabe.work@gmail.com">
                  G-Mail
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </nav>

      {/* Wide viewports: fixed 4-column grid — only from lg breakpoint */}
      <nav
        className="hidden w-full min-w-0 max-w-full min-h-0 flex-1 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-4 xl:gap-x-12"
        aria-label="Footer navigation (wide)"
      >
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="mb-2 text-sm uppercase text-[#ffffff80]">{footer.nav.overviewSection.title}</h3>
          <Link className={linkClass} href="/">
            {footer.nav.overviewSection.home}
          </Link>
          <Link className={linkClass} href="/#anchor_greet">
            {footer.nav.overviewSection.greeting}
          </Link>
          <Link className={linkClass} href="/#anchor_skill">
            {footer.nav.overviewSection.skills}
          </Link>
          <Link className={linkClass} href="/#anchor_job">
            {footer.nav.overviewSection.experience}
          </Link>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="mb-2 text-sm uppercase text-[#ffffff80]">{footer.nav.worksSection.title}</h3>
          <Link className={linkClass} href="/chill">
            {footer.nav.worksSection.chillMusic}
          </Link>
          <Link className={linkClass} href="https://qiita.com/mk-mokumoku/items/0695081d892a8e175995">
            {footer.nav.worksSection.lifelineApp}
          </Link>
          <Link className={linkClass} href="https://github.com/tw-mokumoku/portfolio1">
            {footer.nav.worksSection.discordBulletinBoard}
          </Link>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="mb-2 text-sm uppercase text-[#ffffff80]">SNS</h3>
          <Link className={linkClass} href="https://github.com/tw-mokumoku">
            GitHub
          </Link>
          <Link className={linkClass} href="https://qiita.com/mk-mokumoku">
            Qiita
          </Link>
          <Link
            className={linkClass}
            href="https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/"
          >
            LinkedIn
          </Link>
          <Link className={linkClass} href="https://discord.gg/BF6z7Dw9">
            Discord
          </Link>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="mb-2 text-sm uppercase text-[#ffffff80]">&nbsp;</h3>
          <Link className={linkClass} href="https://x.com/mk_mokumoku">
            X（Twitter）
          </Link>
          <Link className={linkClass} href="mailto:takushi.watanabe.work@gmail.com">
            G-Mail
          </Link>
        </div>
      </nav>
    </>
  );
};
