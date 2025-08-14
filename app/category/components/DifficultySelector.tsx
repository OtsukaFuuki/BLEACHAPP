"use client";

import { FC } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Difficulty } from "../types/Difficulty";

type DifficultySelectorProps = {
  level: Difficulty;
  onSelect: (level: Difficulty) => void;
};

const DifficultySelector: FC<DifficultySelectorProps> = ({
  level,
  onSelect,
}) => {
  const theme = useTheme();
  const difficultyLevels: {
    label: string;
    value: Difficulty;
    color: string;
  }[] = [
    {
      label: "初級",
      value: "easy",
      color: theme.palette.custom.difficultyEasy,
    },
    {
      label: "中級",
      value: "normal",
      color: theme.palette.custom.difficultyNormal,
    },
    {
      label: "上級",
      value: "hard",
      color: theme.palette.custom.difficultyHard,
    },
    {
      label: "卍解",
      value: "bankai",
      color: theme.palette.custom.difficultyHard,
    },
  ];
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color={theme.palette.custom.textDarkBlue}
      >
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
            color: theme.palette.custom.white,
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
