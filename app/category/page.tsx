"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Typography, useTheme } from "@mui/material";
import CategoryLayout from "./components/categoryLayout";
import { ConfirmDialog } from "./components/confirmDialog";
import DifficultySelector from "./components/difficultySelector";
import QuizCountSelect from "./components/quizCountSelect";
import { TopButton } from "./components/topButton";

type Difficulty = "easy" | "normal" | "hard";

const difficultyLabelMap: Record<Difficulty, string> = {
  easy: "初級",
  normal: "中級",
  hard: "上級",
};

export default function CategoryPage() {
  const router = useRouter();
  const theme = useTheme();
  const [count, setCount] = useState<number>(5);
  const [level, setLevel] = useState<Difficulty>("easy");
  const [selectedLevel, setSelectedLevel] = useState<Difficulty | "">("");
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleLevelSelect = (value: Difficulty) => {
    setSelectedLevel(value);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleStartQuiz = () => {
    if (!selectedLevel) return;
    setLevel(selectedLevel);
    setOpenConfirm(false);
    router.push(`/category/quiz?level=${selectedLevel}&count=${count}`);
  };

  return (
    <>
      <CategoryLayout>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ mb: 3, color: theme.palette.custom.textDarkBlue }}
        >
          クイズの設定
        </Typography>
        <QuizCountSelect count={count} onChange={setCount} />
        <DifficultySelector level={level} onSelect={handleLevelSelect} />
      </CategoryLayout>
      <ConfirmDialog
        open={openConfirm}
        count={count}
        selectedLevel={selectedLevel}
        difficultyLabelMap={difficultyLabelMap}
        onClose={handleCloseConfirm}
        onConfirm={handleStartQuiz}
      />
      <TopButton />
    </>
  );
}
