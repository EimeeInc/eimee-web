import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import * as style from "./overlay.module.scss"
import OverlayContext, { initOverlayStore } from "@/contexts/overlay";

const links = [
  {
    title: "TOPページ",
    link: "/",
  },
  {
    title: "ニュース",
    link: "/news/",
  },
  {
    title: "私たちについて",
    link: "/about/",
  },
  {
    title: "会社概要",
    link: "/company/",
  },
  {
    title: "ワークスタイル",
    link: "/office/",
  },
  {
    title: "スタッフ紹介",
    link: "/staff/",
  },
  {
    title: "採用情報",
    link: "/recruit/",
  },
  {
    title: "お問い合わせ",
    link: "/contact/",
  },
]

const Overlay = ({className} : { className? : string }) => {
  const overlayContext = React.useContext(OverlayContext) || initOverlayStore(false);

  return (
    <div className={ classnames(style.wrapper, {[style.isActive]: overlayContext.isActive} , className) }>
      <ul className={style.list}>
        {links.map(({ title, link }, i) => (
          <li className={style.listItem} key={i}>
            <Link className={style.link} to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Overlay
