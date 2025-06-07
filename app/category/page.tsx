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

  const handleCountChange = (event: SelectChangeEvent) => {
    setCount(Number(event.target.value));
  };

  const handleStartQuiz = () => {
    router.push(`/category/quiz?level=${level}&count=${count}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fef5e7",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          p: 4,
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 4, color: "#263238" }}
        >
          クイズの設定
        </Typography>

        {/* 難易度選択 */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            gutterBottom
            color="#263238"
          >
            難易度
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {difficultyLevels.map(({ label, value, color }) => (
              <Button
                key={value}
                variant="contained"
                onClick={() => setLevel(value)}
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

        {/* 問題数選択 */}
        <Box sx={{ mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="count-select-label">問題数</InputLabel>
            <Select
              labelId="count-select-label"
              value={count.toString()}
              label="問題数"
              onChange={handleCountChange}
            >
              {questionCounts.map((num) => (
                <MenuItem key={num} value={num}>
                  {num} 問
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* クイズ開始ボタン */}
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "100%",
            mt: 1,
            backgroundColor: "#ef6c00",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#bf360c",
            },
          }}
          onClick={handleStartQuiz}
        >
          クイズを始める
        </Button>
      </Box>
    </Box>
  );
}
