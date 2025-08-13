"use client";

import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";

type Difficulty = "easy" | "normal" | "hard";

type DifficultySelectorProps = {
  level: Difficulty;
  onSelect: (level: Difficulty) => void;
};

const difficultyLevels: { label: string; value: Difficulty; color: string }[] =
  [
    { label: "初級", value: "easy", color: "#fbc02d" },
    { label: "中級", value: "normal", color: "#ef6c00" },
    { label: "上級", value: "hard", color: "#c62828" },
  ];

const DifficultySelector: FC<DifficultySelectorProps> = ({
  level,
  onSelect,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
      <Typography variant="subtitle1" fontWeight="bold" color="#263238">
        難易度
      </Typography>
      {difficultyLevels.map(({ label, value, color }) => (
        <Button
          key={value}
          variant="contained"
          onClick={() => onSelect(value)}
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
  );
};

export default DifficultySelector;
