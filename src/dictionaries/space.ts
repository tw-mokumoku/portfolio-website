export type SpacePanelId =
  | "presence"
  | "about"
  | "works"
  | "skills"
  | "path"
  | "connect";

export type SpaceDict = {
  brand: string;
  langSwitch: { ja: string; en: string };
  nav: Record<SpacePanelId, { label: string; short: string }>;
  presence: {
    name: string;
    aka: string;
    role: string;
    line: string;
    ctaWorks: string;
    ctaConnect: string;
  };
  about: {
    paras: string[];
  };
  works: {
    items: {
      id: string;
      title: string;
      period: string;
      concept: string;
      href: string;
      image: string;
      external?: boolean;
    }[];
  };
  skills: {
    groups: {
      title: string;
      items: { name: string; src?: string }[];
    }[];
  };
  path: {
    entries: {
      id: string;
      org: string;
      period: string;
      role: string;
      points: string[];
      image?: string;
    }[];
  };
  connect: {
    title: string;
    links: {
      label: string;
      href: string;
      note?: string;
      mark: string;
      /** Optional brand glyph under public/ */
      icon?: string;
    }[];
  };
  audio: {
    enter: string;
    enterHint: string;
    musicOn: string;
    musicOff: string;
    sfxOn: string;
    sfxOff: string;
    playlist: string;
    close: string;
  };
};

/** Full skill inventory from production SkillCards (+ Neon). Shared ja/en. */
const SPACE_SKILL_GROUPS: SpaceDict["skills"]["groups"] = [
  {
    title: "Front",
    items: [
      { name: "Next.js", src: "/root/skill_cards/nextjs-logo.svg" },
      { name: "React", src: "/root/skill_cards/React-logo.svg" },
      { name: "TypeScript", src: "/root/skill_cards/typescript-logo.png" },
      { name: "JavaScript", src: "/root/skill_cards/javascript-logo.png" },
      { name: "HTML5", src: "/root/skill_cards/html-logo.png" },
      { name: "CSS", src: "/root/skill_cards/css-logo.png" },
      { name: "Tailwind CSS", src: "/root/skill_cards/tailwind-logo.png" },
      { name: "Bootstrap", src: "/root/skill_cards/bootstrap-logo.png" },
      { name: "Framer Motion", src: "/root/skill_cards/framermotion-logo.svg" },
      { name: "GSAP", src: "/root/skill_cards/gsap-logo.svg" },
      { name: "shadcn", src: "/root/skill_cards/shadcn-logo.png" },
      { name: "Redux", src: "/root/skill_cards/redux-logo.png" },
      { name: "Axios", src: "/root/skill_cards/axios-logo.png" },
      { name: "i18next", src: "/root/skill_cards/i18next-logo.png" },
      { name: "Open Graph", src: "/root/skill_cards/opengraph-logo.svg" },
      { name: "Vue" },
      { name: "Nuxt" },
      { name: "Three.js" },
      { name: "WordPress" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Expo", src: "/root/skill_cards/eas-logo.png" },
      { name: "EAS", src: "/root/skill_cards/eas-logo.png" },
      { name: "React Native", src: "/root/skill_cards/React-logo.svg" },
      { name: "React Navigation", src: "/root/skill_cards/react-navigation-logo.png" },
      { name: "React Native Paper", src: "/root/skill_cards/react-native-paper-logo.jpg" },
      { name: "Google Play Console", src: "/root/skill_cards/google-play-console-logo.png" },
      { name: "RevenueCat", src: "/root/skill_cards/revenuecat-logo.png" },
    ],
  },
  {
    title: "Back / Lang",
    items: [
      { name: "Node.js", src: "/root/skill_cards/nodejs-logo.png" },
      { name: "npm", src: "/root/skill_cards/npm-logo.png" },
      { name: "Java", src: "/root/skill_cards/java-logo.svg" },
      { name: "Python", src: "/root/skill_cards/python-logo.png" },
      { name: "C", src: "/root/skill_cards/c-logo.png" },
      { name: "C++", src: "/root/skill_cards/c++-logo.png" },
      { name: "C#", src: "/root/skill_cards/csharp-logo.png" },
      { name: ".NET", src: "/root/skill_cards/dotnet-logo.png" },
      { name: "PostgreSQL", src: "/root/skill_cards/postgresql-logo.png" },
      { name: "Neon", src: "/Neon-Logo-500.webp" },
      { name: "Swagger", src: "/root/skill_cards/swagger-logo.png" },
      { name: "Postman", src: "/root/skill_cards/postman-logo.svg" },
      { name: "Faker", src: "/root/skill_cards/faker-logo.png" },
      { name: "Spring Boot" },
      { name: "MyBatis" },
      { name: "Docker" },
    ],
  },
  {
    title: "Cloud / Infra",
    items: [
      { name: "AWS Lambda", src: "/root/skill_cards/lambda-logo.png" },
      { name: "AWS API Gateway", src: "/root/skill_cards/apigateway-logo.png" },
      { name: "AWS Route53", src: "/root/skill_cards/route53-logo.png" },
      { name: "AWS EC2", src: "/root/skill_cards/ec2-logo.png" },
      { name: "AWS RDS", src: "/root/skill_cards/rds-logo.svg" },
      { name: "AWS Lightsail", src: "/root/skill_cards/lightsail-logo.png" },
      { name: "Nginx", src: "/root/skill_cards/nginx-logo.svg" },
      { name: "Vercel", src: "/root/skill_cards/vercel-logo.png" },
      { name: "Heroku", src: "/root/skill_cards/heroku-logo.svg" },
      { name: "GitHub", src: "/root/skill_cards/github-logo.webp" },
      { name: "AWS ECS" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Ops / Craft",
    items: [
      { name: "Cursor", src: "/root/skill_cards/cursor-logo.png" },
      { name: "ESLint", src: "/root/skill_cards/eslint-logo.png" },
      { name: "Active Directory", src: "/root/skill_cards/activedirectory-logo.svg" },
      { name: "PowerShell", src: "/root/skill_cards/powershell-logo.png" },
      { name: "VMware Horizon", src: "/root/skill_cards/vmwarehorizon-logo.png" },
      { name: "TeraTerm", src: "/root/skill_cards/teraterm-logo.png" },
      { name: "Draw.io", src: "/root/skill_cards/drawio-logo.svg" },
      { name: "Blender" },
    ],
  },
];

export const spaceJa: SpaceDict = {
  brand: "mk-mokumoku",
  langSwitch: { ja: "日本語", en: "English" },
  nav: {
    presence: { label: "Presence", short: "在" },
    about: { label: "About", short: "私" },
    works: { label: "Works", short: "作" },
    skills: { label: "Skills", short: "技" },
    path: { label: "Path", short: "道" },
    connect: { label: "Connect", short: "繋" },
  },
  presence: {
    name: "渡邊 琢資",
    aka: "mk-mokumoku",
    role: "Web / Full-stack",
    line: "組み立てることが好きだった幼少期から、いまの画面まで。",
    ctaWorks: "Works",
    ctaConnect: "Connect",
  },
  about: {
    paras: [
      "渡邊琢資（mk-mokumoku）。ゲーム制作の専門学校からプログラミングへ。ソフトウェア・アプリを経て、いまはWeb開発。",
      "一人でサービスを立ち上げた経験がある。構築、API、DB、SEO、マネタイズまで通した。",
      "見た目だけでなく、ストレスの少ないインターフェースを大切にしている。",
    ],
  },
  works: {
    items: [
      {
        id: "chill",
        title: "MK Chill",
        period: "2024 –",
        concept: "集中とリラックスのための Lo-fi ミュージック空間。",
        href: "/chill",
        image: "/music/chill/gif/chillhop_radio/mario_room.gif",
      },
      {
        id: "kawaii",
        title: "MK Kawaii",
        period: "2024 –",
        concept: "かわいいムードのミュージック空間。雰囲気ごとに曲とビジュアルが切り替わる。",
        href: "/kawaii",
        image: "/music/kawaii/gif/kawaii_category.gif",
      },
      {
        id: "wiki",
        title: "wiki.mk-mokumoku.fyi",
        period: "2026 –",
        concept: "学んだこと・知識を Markdown で積む個人Wiki。",
        href: "https://wiki.mk-mokumoku.fyi",
        image: "/space/wiki-mk.png",
        external: true,
      },
      {
        id: "bar-wiki",
        title: "Beyond All Reason Wiki",
        period: "2025 –",
        concept: "BAR 向けのユニット／戦略／ビルドプランナー。キャンバスで作戦を組める。",
        href: "https://beyond-all-reason-wiki.vercel.app/",
        image: "/space/bar-wiki.png",
        external: true,
      },
      {
        id: "lifeline",
        title: "Lifeline",
        period: "2024",
        concept: "集中習慣で「できる」を増やすアプリ。",
        href: "https://qiita.com/mk-mokumoku/items/0695081d892a8e175995",
        image: "/lifeline_featureGraphics.png",
        external: true,
      },
      {
        id: "portfolio1",
        title: "Discord board",
        period: "初期",
        concept: "公開実験としての Discord サーバー掲示板。",
        href: "https://github.com/tw-mokumoku/portfolio1",
        image: "/music/chill/gif/chillhop_radio/windy_room_cat.gif",
        external: true,
      },
    ],
  },
  skills: {
    groups: SPACE_SKILL_GROUPS,
  },
  path: {
    entries: [
      {
        id: "sharedine",
        org: "株式会社シェアダイン",
        period: "2026.06 – 現在",
        role: "フルスタックエンジニア",
        points: [
          "事業者向け画面とシェフ向け画面を主に担当",
          "Web のフロントから裏側まで一貫して開発",
        ],
        image: "/space/sharedine-og.jpg",
      },
      {
        id: "kokoro-sync",
        org: "株式会社心SYNC",
        period: "2025.08 – 2026.02",
        role: "正社員（退職）",
        points: [
          "外資系Web開発案件。Nuxt·Vue·React / Spring Boot / Docker·ECS",
          "フロント 142 PR（131 merge）",
        ],
        image: "/space/kokorosync-logo.jpg",
      },
      {
        id: "freelance",
        org: "個人事業主",
        period: "2023.06 – 2025.02",
        role: "Web受託 · 指導",
        points: [
          "名簿DX、WordPress、Three.js",
          "非エンジニア2名を6ヶ月でWebアプリ自力構築まで",
        ],
        image: "/hoodCat.png",
      },
      {
        id: "priority",
        org: "プライオリティーコンサルティング",
        period: "2022.01 – 2023.05",
        role: "防衛省内部部局 · 基盤",
        points: ["PowerShell自動化、VMware Horizon、WSUS"],
        image: "/space/mod-sns-card.png",
      },
    ],
  },
  connect: {
    title: "繋ぐ",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tw-mokumoku",
        note: "tw-mokumoku",
        mark: "GH",
        icon: "/music/ui/github_icon.svg",
      },
      {
        label: "Qiita",
        href: "https://qiita.com/mk-mokumoku",
        note: "mk-mokumoku",
        mark: "Qi",
        icon: "/root/tech_logos/icon_button/qiita_logo.png",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/",
        mark: "in",
        icon: "/space/icon-linkedin.svg",
      },
      {
        label: "X",
        href: "https://x.com/mk_mokumoku",
        note: "@mk_mokumoku",
        mark: "X",
        icon: "/music/ui/x.svg",
      },
      {
        label: "Discord",
        href: "https://discord.gg/BF6z7Dw9",
        mark: "Dc",
        icon: "/music/ui/discord_icon.svg",
      },
      {
        label: "Email",
        href: "mailto:takushi.watanabe.work@gmail.com",
        note: "work mail",
        mark: "@",
        icon: "/space/icon-mail.svg",
      },
      {
        label: "ご意見箱",
        href: "/goikenbako",
        note: "anonymous box",
        mark: "箱",
        icon: "/space/icon-box.svg",
      },
    ],
  },
  audio: {
    enter: "はいる",
    enterHint: "タップで音楽が流れはじめます",
    musicOn: "Music",
    musicOff: "Music off",
    sfxOn: "SFX",
    sfxOff: "SFX off",
    playlist: "Playlist",
    close: "閉じる",
  },
};

export const spaceEn: SpaceDict = {
  brand: "mk-mokumoku",
  langSwitch: { ja: "日本語", en: "English" },
  nav: {
    presence: { label: "Presence", short: "P" },
    about: { label: "About", short: "A" },
    works: { label: "Works", short: "W" },
    skills: { label: "Skills", short: "S" },
    path: { label: "Path", short: "H" },
    connect: { label: "Connect", short: "C" },
  },
  presence: {
    name: "Takushi Watanabe",
    aka: "mk-mokumoku",
    role: "Web / Full-stack",
    line: "From a childhood of assembling things — to these screens.",
    ctaWorks: "Works",
    ctaConnect: "Connect",
  },
  about: {
    paras: [
      "Takushi Watanabe (mk-mokumoku). From a game-dev school into programming, through software and apps, now web.",
      "I've launched services alone — build, API, DB, SEO, monetization.",
      "I care about interfaces that stay calm to use, not only look good.",
    ],
  },
  works: {
    items: [
      {
        id: "chill",
        title: "MK Chill",
        period: "2024 –",
        concept: "A Lo-fi music space for focus and ease.",
        href: "/chill",
        image: "/music/chill/gif/chillhop_radio/mario_room.gif",
      },
      {
        id: "kawaii",
        title: "MK Kawaii",
        period: "2024 –",
        concept: "A kawaii music room — moods switch tracks and visuals.",
        href: "/kawaii",
        image: "/music/kawaii/gif/kawaii_category.gif",
      },
      {
        id: "wiki",
        title: "wiki.mk-mokumoku.fyi",
        period: "2026 –",
        concept: "A personal wiki of notes in Markdown.",
        href: "https://wiki.mk-mokumoku.fyi",
        image: "/space/wiki-mk.png",
        external: true,
      },
      {
        id: "bar-wiki",
        title: "Beyond All Reason Wiki",
        period: "2025 –",
        concept: "Units, strategies, and a canvas build planner for BAR.",
        href: "https://beyond-all-reason-wiki.vercel.app/",
        image: "/space/bar-wiki.png",
        external: true,
      },
      {
        id: "lifeline",
        title: "Lifeline",
        period: "2024",
        concept: "Focus habits that grow what you can do.",
        href: "https://qiita.com/mk-mokumoku/items/0695081d892a8e175995",
        image: "/lifeline_featureGraphics.png",
        external: true,
      },
      {
        id: "portfolio1",
        title: "Discord board",
        period: "Early",
        concept: "An early public Discord bulletin-board experiment.",
        href: "https://github.com/tw-mokumoku/portfolio1",
        image: "/music/chill/gif/chillhop_radio/windy_room_cat.gif",
        external: true,
      },
    ],
  },
  skills: {
    groups: SPACE_SKILL_GROUPS,
  },
  path: {
    entries: [
      {
        id: "sharedine",
        org: "SHAREDINE Inc.",
        period: "2026.06 – Present",
        role: "Full-stack engineer",
        points: [
          "Mainly business-facing and chef-facing screens",
          "End-to-end web work across front and back",
        ],
        image: "/space/sharedine-og.jpg",
      },
      {
        id: "kokoro-sync",
        org: "Kokoro SYNC Inc.",
        period: "2025.08 – 2026.02",
        role: "Full-time (left)",
        points: [
          "Foreign-affiliated web work. Nuxt·Vue·React / Spring / Docker·ECS",
          "142 frontend PRs (131 merged)",
        ],
        image: "/space/kokorosync-logo.jpg",
      },
      {
        id: "freelance",
        org: "Freelance",
        period: "2023.06 – 2025.02",
        role: "Web · teaching",
        points: [
          "Roster DX, WordPress, Three.js",
          "Coached two non-engineers to ship in 6 months",
        ],
        image: "/hoodCat.png",
      },
      {
        id: "priority",
        org: "Priority Consulting",
        period: "2022.01 – 2023.05",
        role: "MOD bureau · platform",
        points: ["PowerShell automation, VMware Horizon, WSUS"],
        image: "/space/mod-sns-card.png",
      },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tw-mokumoku",
        note: "tw-mokumoku",
        mark: "GH",
        icon: "/music/ui/github_icon.svg",
      },
      {
        label: "Qiita",
        href: "https://qiita.com/mk-mokumoku",
        note: "mk-mokumoku",
        mark: "Qi",
        icon: "/root/tech_logos/icon_button/qiita_logo.png",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/%E6%B8%A1%E9%82%8A-%E7%90%A2%E8%B3%87-731b63327/",
        mark: "in",
        icon: "/space/icon-linkedin.svg",
      },
      {
        label: "X",
        href: "https://x.com/mk_mokumoku",
        note: "@mk_mokumoku",
        mark: "X",
        icon: "/music/ui/x.svg",
      },
      {
        label: "Discord",
        href: "https://discord.gg/BF6z7Dw9",
        mark: "Dc",
        icon: "/music/ui/discord_icon.svg",
      },
      {
        label: "Email",
        href: "mailto:takushi.watanabe.work@gmail.com",
        note: "work mail",
        mark: "@",
        icon: "/space/icon-mail.svg",
      },
      {
        label: "Opinion box",
        href: "/goikenbako",
        note: "anonymous box",
        mark: "Box",
        icon: "/space/icon-box.svg",
      },
    ],
  },
  audio: {
    enter: "Enter",
    enterHint: "Tap to start the playlist",
    musicOn: "Music",
    musicOff: "Music off",
    sfxOn: "SFX",
    sfxOff: "SFX off",
    playlist: "Playlist",
    close: "Close",
  },
};

export const getSpaceDict = (lang: "ja" | "en"): SpaceDict =>
  lang === "ja" ? spaceJa : spaceEn;
