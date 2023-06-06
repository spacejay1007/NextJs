import React from "react";
import styled, { css } from "styled-components";
import { margin } from "../styled";

export type Styles = {
  width?: number | string;
  height?: number;
  radius?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: string;
  backgroundColor?: string;
  color?: string;
  placeholderColor?: string;
  fontWeight?: number;
  fontSize?: number;
  align?: string;
  border?: string;
  hover?: Partial<{
    backgroundColor?: string;
    color?: string;
    border?: string;
  }>;
  disabled?: Partial<{
    backgroundColor?: string;
    color?: string;
    cursor?: string;
  }>;
  active?: Partial<{
    backgroundColor?: string;
    color?: string;
    border?: string;
  }>;
};

export interface Props {
  type?: "button" | "submit";
  text?: string;
  loading?: boolean;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[];
  onClick?: (e: React.UIEvent) => void;
  styles?: Styles;
}

export interface I_ButtonProps {
  type?: "button" | "submit";
  text?: string;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[];
  onClick?: (e: React.UIEvent) => void;
  styles?: Styles;
}

export const Container = styled.div`
  letter-spacing: -0.14px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const ButtonElement = styled.button<Styles>`
  position: relative;
  display: block;
  line-height: initial;
  font-family: inherit;
  width: ${({ width }) => {
    if (typeof width === "string") return width;
    return `${width ?? 120}px`;
  }};
  height: ${({ height }) => `${height ?? 40}px`};
  border-radius: ${({ radius }) => `${radius ?? 0}px`};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#FDE047"};
  border: ${({ border }) => border ?? "none"};
  border-radius: 3px;
  outline: none;
  overflow: hidden;
  user-select: none;
  padding: 0 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  ${(props) => {
    return css`
      ${margin(props)}
    `;
  }}

  &:active {
    background-color: ${({ active }) => active?.backgroundColor};
    border: ${({ active }) => active?.border};
    ${Container} {
      color: ${({ active }) => active?.color};
    }
  }

  &:hover {
    background-color: ${({ hover }) => hover?.backgroundColor};
    border: ${({ hover }) => hover?.border};
    ${Container} {
      color: ${({ hover }) => hover?.color};
    }
  }

  ${Container} {
    font-size: ${({ fontSize }) => `${fontSize || 12}px`};
    color: ${({ color }) => color || "black"};
    font-weight: ${({ fontWeight }) => fontWeight ?? 700};
    justify-content: ${({ align }) => align || "center"};
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: initial;
        background-color: #e6e6e6;
        opacity: 0.5;
        ${Container} {
          color: #c5c6ca;
        }
      `;
    }

    return "";
  }}
`;

export const Button: React.FC<I_ButtonProps> = (props): JSX.Element => {
  const { styles, type, disabled, children, text, onClick } = props;
  const onClickHandler = (e: React.UIEvent) => {
    onClick && onClick(e);
  };
  return (
    <ButtonElement
      {...styles}
      // {...rest}
      type={type}
      disabled={disabled}
      onClick={onClickHandler}
      className="my_blog__button"
    >
      <Container>{children || text}</Container>
    </ButtonElement>
  );
};
