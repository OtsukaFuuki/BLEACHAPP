"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      narutoGradient: string;
      narutoGradientHover: string;
      gold: string;
      textDark: string;
      white: string;
      black: string;
      orangeDark: string;
      redDark: string;
      grayBorder: string;
      grayDisabled: string;
      topButtonGradient: string;
      topButtonGradientHover: string;
      difficultyEasy: string;
      difficultyNormal: string;
      difficultyHard: string;
      textDarkBlue: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      narutoGradient?: string;
      narutoGradientHover?: string;
      gold?: string;
      textDark?: string;
      white?: string;
      black?: string;
      orangeDark?: string;
      redDark?: string;
      grayBorder?: string;
      grayDisabled?: string;
      topButtonGradient?: string;
      topButtonGradientHover?: string;
      difficultyEasy: string;
      difficultyNormal: string;
      difficultyHard: string;
      textDarkBlue: string;
    };
  }
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#f57c00", // オレンジ
    },
    secondary: {
      main: "#e53935", // 赤
    },
    custom: {
      narutoGradient: "linear-gradient(to right, #f57c00, #e53935)",
      narutoGradientHover: "linear-gradient(to right, #ef6c00, #d32f2f)",
      gold: "#fbc02d",
      textDark: "#333",
      white: "#fff",
      black: "#000",
      orangeDark: "#ef6c00",
      redDark: "#d32f2f",
      grayBorder: "#ccc",
      grayDisabled: "#999",
      topButtonGradient: "linear-gradient(to right, #ffa726, #ef5350)",
      topButtonGradientHover: "linear-gradient(to right, #fb8c00, #e53935)",
      difficultyEasy: "#fbc02d",
      difficultyNormal: "#ef6c00",
      difficultyHard: "#c62828",
      textDarkBlue: "#263238",
    },
  },
});

export default theme;
