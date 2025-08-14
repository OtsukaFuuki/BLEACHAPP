"use client";

import { FC } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";

type QuizCountSelectProps = {
  count: number;
  onChange: (count: number) => void;
};

const questionCounts = [5, 10, 15, 20, 25, 30];

const QuizCountSelect: FC<QuizCountSelectProps> = ({ count, onChange }) => {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent) => {
    onChange(Number(event.target.value));
  };

  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="count-select-label">問題数</InputLabel>
      <Select
        labelId="count-select-label"
        value={count.toString()}
        label="問題数"
        onChange={handleChange}
        sx={{ backgroundColor: theme.palette.custom.white, borderRadius: 1 }}
      >
        {questionCounts.map((num) => (
          <MenuItem key={num} value={num}>
            {num} 問
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default QuizCountSelect;
