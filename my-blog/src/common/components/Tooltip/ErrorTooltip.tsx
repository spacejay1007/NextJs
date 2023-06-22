import React from "react";

type T_ErrorTooltip = {
  text: string;
};
export const ErrorTooltip: React.FC<T_ErrorTooltip> = ({
  text,
}): JSX.Element => {
  return (
    <article className="tooltip__container">
      <section className="tooltip__wrapper">
        <div className="tooltip__text">{text}</div>
      </section>
    </article>
  );
};
