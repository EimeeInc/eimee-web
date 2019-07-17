type Pages =
  | "top"
  | "news"
  | "about"
  | "company"
  | "office"
  | "staff"
  | "recruit"
  | "contact"
  | "policy";

type Routings = {
  [T in Pages]: {
    location: string;
    parent: Pages | null;
    label: string;
  }
};

const routings: Routings = {
  top: {
    location: "/",
    parent: null,
    label: "TOPページ",
  },
  news: {
    location: "/news/",
    parent: "top",
    label: "ニュース",
  },
  about: {
    location: "/about/",
    parent: "top",
    label: "私たちについて",
  },
  company: {
    location: "/company/",
    parent: "top",
    label: "会社概要",
  },
  office: {
    location: "/office/",
    parent: "top",
    label: "ワークスタイル",
  },
  staff: {
    location: "/staff/",
    parent: "top",
    label: "スタッフ紹介",
  },
  recruit: {
    location: "/recruit/",
    parent: "top",
    label: "採用情報",
  },
  contact: {
    location: "/contact/",
    parent: "top",
    label: "お問い合わせ",
  },
  policy: {
    location: "/policy/",
    parent: "top",
    label: "個人情報保護方針",
  },
};

export default routings;
