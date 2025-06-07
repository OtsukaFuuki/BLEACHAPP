"use client";

import { useRouter } from "next/navigation";
import { Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const backgroundImages = [
    "/images/top/top4.jpeg",
    "/images/top/top14.jpeg",
    "/images/top/top42.jpeg",
    "/images/top/top43.jpeg",
    "/images/top/top28.jpeg",
    "/images/top/top39.jpeg",
  ];

  const [randomImage, setRandomImage] = useState<string | null>(null);

  useEffect(() => {
    const index = Math.floor(Math.random() * backgroundImages.length);
    setRandomImage(backgroundImages[index]);
  }, []);

  const handleStart = () => {
    router.push("/category");
  };

  return (
    <Box
      sx={{
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: randomImage ? `url(${randomImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: 250,
          height: 100,
          backgroundImage: 'url("/images/logo/logo2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "left",
          alignItems: "left",
          display: "flex",
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1,
        }}
      ></Box>
      <Button
        sx={{
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
      </Button>
    </Box>
  );
}
