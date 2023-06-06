import React, { useState } from "react";
import styled, { css } from "styled-components";
import { margin, padding } from "../styled";

export type Styles = {
  width?: number | string;
  height?: number | string;
  indent?: number;
  backgroundColor?: string;
  fontSize?: number;
  border?: string;
  color?: string;
  placeholderColor?: string;
  radius?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  fontWeight?: number;
  margin?: string;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  padding?: string;
  hover?: Partial<{
    backgroundColor?: string;
  }>;
  focus?: Partial<{
    backgroundColor?: string;
    borderColor?: string;
  }>;
};

export const InputEl = styled.input<{ type: string }>`
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
  font-family: inherit;
`;

export const Container = styled.div<Styles & { disabled: boolean }>`
  position: relative;
  height: ${({ height }) => {
    if (typeof height === "string") return height;
    return `${height ?? 40}px`;
  }};
  width: ${({ width }) => {
    if (typeof width === "string") return width;
    return `${width ?? 300}px`;
  }};

  ${(props) => {
    return css`
      ${margin(props)}
      ${padding(props)}
    `;
  }}

  ${InputEl} {
    padding: ${({ indent }) => `0 ${indent ?? 14}px`};
    background-color: ${({ backgroundColor }) => backgroundColor ?? "#ffffff"};
    font-size: ${({ fontSize }) => `${fontSize ?? 14}px`};
    border: ${({ border }) => border ?? "1px solid #e6e6e6"};
    border-radius: ${({ radius }) => `${radius ?? 0}px`};
    color: ${({ color }) => color ?? "#191919"};
    line-height: ${({ height }) => `${height ?? 40}px`};
    width: 100%;
    height: 100%;

    &:hover {
      background-color: ${({ hover }) => hover?.backgroundColor};
    }

    &:focus {
      background-color: ${({ focus }) => focus?.backgroundColor};
      border-color: ${({ focus }) => focus?.borderColor};
    }

    &::placeholder {
      color: ${({ placeholderColor }) => placeholderColor ?? "#a5adba"};
      font-size: ${({ fontSize }) => `${fontSize ?? 14}px`};
    }
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        ${InputEl} {
          background-color: #f5f5f5;
          color: #a5adba;
        }
      `;
    }

    return "";
  }}
`;

export interface I_InputProps {
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  styles?: Styles;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string | undefined;
  disabled?: boolean;
  value?: string;
}

export const Input: React.FC<I_InputProps> = (props): JSX.Element => {
  const [change, setChange] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChange(value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <Container
      {...props.styles}
      disabled={!!props.disabled}
      className="my_blog__input__ct"
    >
      <InputEl
        type={props.type ? props.type : ""}
        value={props.value}
        className="my_blog__input"
        placeholder={props.disabled ? "" : props.placeholder}
        onChange={onChangeHandler}
      />
    </Container>
  );
};
