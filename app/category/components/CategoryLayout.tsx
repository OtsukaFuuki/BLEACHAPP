"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";

type CategoryLayoutProps = {
  children: ReactNode;
};

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('/images/top/top24.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        px: 2,
      }}
    >
      {/* 白い中央カード */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 3,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#ffffffd2",
          boxShadow: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CategoryLayout;
