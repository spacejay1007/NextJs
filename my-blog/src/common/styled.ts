import {} from "styled-components";

type Margin = {
  margin?: string;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

export const margin = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: Margin): string | undefined => {
  type Merge = {
    "margin-top"?: number;
    "margin-bottom"?: number;
    "margin-left"?: number;
    "margin-right"?: number;
  };
  const merge: Partial<Merge> = {};
  if (margin) return `margin: ${margin};`;
  if (marginTop) merge["margin-top"] = marginTop;
  if (marginBottom) merge["margin-bottom"] = marginBottom;
  if (marginLeft) merge["margin-left"] = marginLeft;
  if (marginRight) merge["margin-right"] = marginRight;

  if (marginTop || marginBottom || marginLeft || marginRight) {
    let string = "";
    // eslint-disable-next-line guard-for-in
    for (const key in merge) {
      const castKey = key as keyof Merge;
      string += `${key}: ${merge[castKey]}px;`;
    }
    return string;
  }

  return "";
};

type Padding = {
  padding?: string;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
};

export const padding = ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: Padding): string | undefined => {
  type Merge = {
    "padding-top"?: number;
    "padding-bottom"?: number;
    "padding-left"?: number;
    "padding-right"?: number;
  };
  const merge: Partial<Merge> = {};
  if (padding) return `padding: ${padding};`;
  if (paddingTop) merge["padding-top"] = paddingTop;
  if (paddingBottom) merge["padding-bottom"] = paddingBottom;
  if (paddingLeft) merge["padding-left"] = paddingLeft;
  if (paddingRight) merge["padding-right"] = paddingRight;

  if (paddingTop || paddingBottom || paddingLeft || paddingRight) {
    let string = "";
    // eslint-disable-next-line guard-for-in
    for (const key in merge) {
      const castKey = key as keyof Merge;
      string += `${key}: ${merge[castKey]}px;`;
    }
    return string;
  }

  return "";
};
