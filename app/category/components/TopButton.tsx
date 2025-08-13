"use client";

import { Fab } from "@mui/material";
import { useRouter } from "next/navigation";

export const TopButton = () => {
  const router = useRouter();

  return (
    <Fab
      color="primary"
      size="medium"
      sx={{
        position: "fixed",
        bottom: 12,
        right: 12,
        background: "linear-gradient(to right, #f57c00, #e53935)",
        color: "#fff",
        fontWeight: "bold",
        "&:hover": {
          background: "linear-gradient(to right, #ef6c00, #d32f2f)",
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
