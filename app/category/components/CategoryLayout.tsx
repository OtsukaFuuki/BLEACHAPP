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
        // backgroundImage: "url('/images/top/bg_1.jpeg')",
        // backgroundImage: "url('/images/top/bg_2.jpeg')",
        // backgroundImage: "url('/images/top/bg_3.jpeg')",a
        // backgroundImage: "url('/images/top/bg_4.jpeg')",
        // backgroundImage: "url('/images/top/bg_5.jpeg')",
        // backgroundImage: "url('/images/top/bg_6.jpeg')",
        // backgroundImage: "url('/images/top/bg_7.jpeg')",
        // backgroundImage: "url('/images/top/bg_8.jpeg')",
        // backgroundImage: "url('/images/top/bg_9.jpeg')",
        // backgroundImage: "url('/images/top/bg_10.jpeg')",
        // backgroundImage: "url('/images/top/bg_11.jpeg')",
        // backgroundImage: "url('/images/top/bg_12.jpeg')",
        // backgroundImage: "url('/images/top/bg_13.jpeg')",
        // backgroundImage: "url('/images/top/bg_14.jpeg')",
        // backgroundImage: "url('/images/top/bg_15.jpeg')",
        // backgroundImage: "url('/images/top/bg_16.jpeg')",a
        // backgroundImage: "url('/images/top/bg_17.jpeg')",
        // backgroundImage: "url('/images/top/bg_18.jpeg')",
        // backgroundImage: "url('/images/top/bg_19.jpeg')",
        // backgroundImage: "url('/images/top/bg_20.jpeg')",
        // backgroundImage: "url('/images/top/bg_21.jpeg')",
        // backgroundImage: "url('/images/top/bg_22.jpeg')",a
        // backgroundImage: "url('/images/top/bg_23.jpeg')",a
        // backgroundImage: "url('/images/top/bg_24.jpeg')",
        // backgroundImage: "url('/images/top/bg_25.jpeg')",
        backgroundImage: "url('/images/top/bg_26.jpeg')",
        // backgroundImage: "url('/images/top/bg_27.jpeg')",
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
