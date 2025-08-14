"use client";

import { Fab, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export const TopButton = () => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Fab
      color="primary"
      size="medium"
      sx={{
        position: "fixed",
        bottom: 12,
        right: 12,
        background: theme.palette.custom.narutoGradient,
        color: theme.palette.custom.white,
        "&:hover": {
          background: theme.palette.custom.narutoGradientHover,
        },
        animation: "bounce 1s infinite",
        "@keyframes bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      }}
      onClick={() => router.push("/")}
    >
      Top
    </Fab>
  );
};
