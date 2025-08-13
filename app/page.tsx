"use client";

import { useRouter } from "next/navigation";
import { Button, Box } from "@mui/material";
import { useRandomImage } from "@/hooks/useRandomImage";

const Home = () => {
  const router = useRouter();

  const backgroundImages = [
    "/images/top/1.jpeg",
    "/images/top/2.jpeg",
    "/images/top/3.jpeg",
    "/images/top/4.jpeg",
    "/images/top/5.jpeg",
    "/images/top/6.jpeg",
    "/images/top/7.jpeg",
  ];

  // ランダムな画像を取得するカスタムフック
  const randomImage = useRandomImage(backgroundImages);

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
      {/* <Box
        sx={{
          width: 160,
          height: 65,
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
      /> */}
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
};
export default Home;
