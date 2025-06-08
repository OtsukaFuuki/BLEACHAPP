"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
} from "@mui/material";

const difficultyLevels = [
  { label: "初級", value: "easy", color: "#fbc02d" },
  { label: "中級", value: "normal", color: "#ef6c00" },
  { label: "上級", value: "hard", color: "#c62828" },
];

const questionCounts = [5, 10, 15, 20, 25, 30];

export default function CategoryPage() {
  const router = useRouter();
  const [level, setLevel] = useState("easy");
  const [count, setCount] = useState(5);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleCountChange = (event: SelectChangeEvent) => {
    setCount(Number(event.target.value));
  };

  const handleLevelClick = (value: string) => {
    setSelectedLevel(value);
    setOpenConfirm(true);
  };

  const handleClose = () => {
    setOpenConfirm(false);
  };

  const handleStartQuiz = () => {
    setLevel(selectedLevel);
    setOpenConfirm(false);
    router.push(`/category/quiz?level=${selectedLevel}&count=${count}`);
  };

  const getLevelLabel = (value: string) => {
    const levelObj = difficultyLevels.find((lvl) => lvl.value === value);
    return levelObj ? levelObj.label : "";
  };

  return (
    <>
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
        <Box
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
        />
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
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ mb: 3, color: "#263238" }}
          >
            クイズの設定
          </Typography>

          {/* 問題数選択 */}
          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="count-select-label">問題数</InputLabel>
              <Select
                labelId="count-select-label"
                value={count.toString()}
                label="問題数"
                onChange={handleCountChange}
                sx={{ backgroundColor: "#fff", borderRadius: 1 }}
              >
                {questionCounts.map((num) => (
                  <MenuItem key={num} value={num}>
                    {num} 問
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* 難易度選択 */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="#263238">
              難易度
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
              {difficultyLevels.map(({ label, value, color }) => (
                <Button
                  key={value}
                  variant="contained"
                  onClick={() => handleLevelClick(value)}
                  fullWidth
                  sx={{
                    backgroundColor: color,
                    color: "#fff",
                    fontWeight: level === value ? "bold" : "normal",
                    opacity: level === value ? 1 : 0.8,
                    "&:hover": {
                      backgroundColor: color,
                      opacity: 0.9,
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>

        {/* 確認ダイアログ */}
        <Dialog open={openConfirm} onClose={handleClose}>
          <DialogTitle sx={{ fontWeight: "bold", fontSize: 16 }}>
            選択した設定の確認
          </DialogTitle>
          <DialogContent
            dividers
            sx={{
              width: 360,
              minHeight: 200,
              display: "flex",
            }}
          >
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                問題数：{count} 問
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 14, mt: 2 }}>
                難易度：{getLevelLabel(selectedLevel)}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundImage: 'url("/images/Dialog/dialog5.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "250px",
                aspectRatio: "280 / 220",
              }}
            />
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={handleClose} color="inherit" variant="outlined">
              戻る
            </Button>
            <Button
              onClick={handleStartQuiz}
              sx={{ backgroundColor: "#fbc02d" }}
              variant="contained"
            >
              問題へ進む
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      {/* Topへ戻るボタン */}
      <Fab
        color="primary"
        size="medium"
        sx={{
          position: "fixed",
          bottom: 12,
          right: 12,
          background: "linear-gradient(to right, #f57c00, #e53935)", // ナルト風グラデ
          color: "#fff",
          fontWeight: "bold",
          "&:hover": {
            background: "linear-gradient(to right, #ef6c00, #d32f2f)",
          },
          animation: "bounce 1s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-6px)",
            },
          },
        }}
        onClick={() => router.push("/")}
      >
        Top
      </Fab>
    </>
  );
}
