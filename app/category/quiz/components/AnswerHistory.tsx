"use client";

import { Box, Typography } from "@mui/material";

type Answer = {
  question: string;
  selected: string;
  correct: string;
};

type Props = {
  answers: Answer[];
};

export const AnswerHistory: React.FC<Props> = ({ answers }) => {
  return (
    <Box
      sx={{
        maxHeight: 450,
        overflowY: "auto",
        mt: 3,
        pr: 1,
      }}
    >
      {answers.map((ans, i) => {
        const isCorrect = ans.selected === ans.correct;
        return (
          <Box
            key={i}
            mb={2}
            p={2}
            border="2px solid"
            borderRadius={2}
            borderColor={isCorrect ? "success.light" : "error.light"}
            bgcolor="#ffffffd2"
          >
            <Typography sx={{ fontSize: 14 }}>
              {i + 1}. {ans.question}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography
                sx={{ fontWeight: "bold", width: "100px", fontSize: 12 }}
              >
                あなたの答え
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                : {ans.selected}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ fontWeight: "bold", width: "100px", fontSize: 12 }}
              >
                正解
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 12 }}>
                : {ans.correct}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
