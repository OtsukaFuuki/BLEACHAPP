"use client";

import { useRouter } from "next/navigation";
import { Button, Box } from "@mui/material";
import { useRandomImage } from "@/hooks/useRandomImage";

const Home = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/category");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 背景動画 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // コンテンツより背面
        }}
      >
        <source src="/video/top_background_6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box
        sx={{
          width: 160,
          height: 65,
          backgroundImage: 'url("/images/logo/headerLogo.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "left",
          alignItems: "left",
          display: "flex",
          position: "absolute",
          // top: 20,
          left: 10,
          zIndex: 1,
        }}
      />
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontWeight: "bold",
          width: "100%",
          height: "100vh",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "inherit",
            color: "#fff",
            boxShadow: "none",
          },
          zIndex: 1,
          animation: "bounce 1s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-4px)",
            },
          },
        }}
        onClick={handleStart}
      >
        ここをクリック
        <br />
        <span style={{ fontSize: "10px" }}>※一護の目が開くまで待ってね!!</span>
      </Button>
    </Box>
  );
};
export default Home;
