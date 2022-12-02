import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string;
      red: string;
      yellow: string;
      purple: string;
      background: string;
      black: string;
      white: string;
      text: {
        darkest: string;
        dark: string;
        light: string;
        lightest: string;
      };
    };
    margin: {
      none: string;
      s: string;
      m: string;
      l: string;
    };
    font: {
      weight: {
        normal: number;
        bold: number;
      };
    };
  }
}

export type BaseColors = "blue" | "red" | "yellow" | "purple" | "background";
export type TextColors = "darkest" | "dark" | "light" | "lightest";
export type FontWeight = "normal" | "bold";

export type Margin = "none" | "s" | "m" | "l";
