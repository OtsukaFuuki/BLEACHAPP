"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
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
  { label: "初級", value: "easy" },
  { label: "中級", value: "normal" },
  { label: "上級", value: "hard" },
];

const questionCounts = [5, 10, 15, 20, 25, 30]; // 将来的に増えても対応可能

export default function CategoryPage() {
  const router = useRouter();
  const [level, setLevel] = useState("easy");
  const [count, setCount] = useState(5);

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  const handleCountChange = (event: SelectChangeEvent) => {
    setCount(Number(event.target.value));
  };

  const handleStartQuiz = () => {
    router.push(`/category/quiz?level=${level}&count=${count}`);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        難易度と問題数を選択してください
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">難易度</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
          {difficultyLevels.map(({ label, value }) => (
            <Button
              key={value}
              variant={level === value ? "contained" : "outlined"}
              onClick={() => setLevel(value)}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
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

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 6 }}
        onClick={handleStartQuiz}
      >
        クイズを始める
      </Button>
    </Container>
  );
}
