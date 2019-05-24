import * as React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import OverlayContext, { initOverlayStore } from "@/contexts/Overlay"
import styled from "@emotion/styled"
import media from "@/util/breakpoint"

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

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  transform: scale(1);
  transition: transform 0.15s, opacity 0.15s;
  background-color: rgba(0, 0, 0, 0.8);

  &:not(.isActive) {
    opacity: 0;
    transform: scale(0.9);
    pointer-events: none;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 80px;
  line-height: 1;
  color: #ffffff;

  ${media.lessThan("md")`
  padding: 60px;
  `}
`

const ListItem = styled.li`
  flex-grow: 1;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${media.lessThan("md")`
    font-size: 2.5rem;
  `}
`

const Overlay = ({ className }: { className?: string }) => {
  const overlayContext =
    React.useContext(OverlayContext) || initOverlayStore(false)

  return (
    <Wrapper
      className={classnames(className, { isActive: overlayContext.isActive })}
    >
      <List>
        {links.map(({ title, link }, i) => (
          <ListItem key={i}>
            <StyledLink to={link}>{title}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

export default Overlay
