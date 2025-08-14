"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>ブリーチクイズアプリ</title>
        <meta
          name="description"
          content="「BLEACH（ブリーチ）のキャラクターや技、卍解名に関するクイズを楽しめるサイトです。初心者から上級者まで遊べます。」"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
