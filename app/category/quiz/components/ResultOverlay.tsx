"use client";

import { Box, Typography } from "@mui/material";

type Props = {
  showIcon: "correct" | "wrong" | null;
  correctAnswer?: string;
};

export const ResultOverlay: React.FC<Props> = ({ showIcon, correctAnswer }) => {
  if (!showIcon) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300,
        backgroundColor: "rgba(255,255,255,0.4)",
      }}
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{
          color: showIcon === "correct" ? "success.light" : "error.light",
          fontSize: "6rem",
        }}
      >
        {showIcon === "correct" ? "〇" : "×"}
      </Typography>

      {showIcon === "wrong" && correctAnswer && (
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "error.main",
          }}
        >
          正解：{correctAnswer}
        </Typography>
      )}
    </Box>
  );
};
