import * as React from "react";
import classnames from "classnames";
import styled from "@emotion/styled";
import media from "@/util/breakpoint";

const Wrapper = styled.div`
  opacity: 0;

  &.isVisible {
    opacity: 1;
    transition: opacity 1.5s 0.3s;
  }
`;

type FadeInEnteringCardProps = {
  children: React.ReactNode;
  className?: string;
};

const FadeInEnteringCard = ({
  children,
  className,
}: FadeInEnteringCardProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  if (typeof IntersectionObserver !== "undefined") {
    const observer = new IntersectionObserver(entries => {
      for (const { isIntersecting } of entries) {
        setIsVisible(isIntersecting);
      }
    });

    React.useEffect(() => {
      if (wrapperRef.current) {
        observer.observe(wrapperRef.current);
      }

      return () => {
        if (wrapperRef.current) {
          observer.unobserve(wrapperRef.current);
        }
      };
    });
  }

  return (
    <Wrapper className={classnames(className, { isVisible })} ref={wrapperRef}>
      {children}
    </Wrapper>
  );
};

export default FadeInEnteringCard;
