import React, { useRef } from "react";
import "./ErrorToolTip.scss";
import { styled } from "styled-components";

type T_ErrorTooltip = {
  text: string;
};

const Errow = styled.div`
  content: " ";
  width: 0;
  height: 0;
  top: -6px;
  left: 12px;
  position: absolute;
  border-left: 4px solid transparent !important;
  border-right: 4px solid transparent !important;
  border-bottom: 7px solid #333;
`;

export const ErrorTooltip: React.FC<T_ErrorTooltip> = ({
  text,
}): JSX.Element => {
  return (
    <article className="tooltip__container">
      <section className="tooltip__wrapper">
        {/* <div className="arrow" /> */}
        <Errow />
        <div className="tooltip__text">{text}</div>
      </section>
    </article>
  );
};
