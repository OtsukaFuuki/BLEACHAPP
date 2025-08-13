"use client";

import { Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export type Question = {
  id: number;
  question: string;
  image?: string;
  choices: string[];
  answer: string;
};

type Props = {
  question: Question;
  selected: string | null;
  showIcon: "correct" | "wrong" | null;
  onAnswer: (choice: string) => void;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  selected,
  showIcon,
  onAnswer,
}) => {
  return (
    <Box>
      {/* 問題文 */}
      <Typography
        sx={{
          fontSize: 14,
          flexShrink: 0,
          minHeight: 75,
          fontWeight: "semiBold",
          textAlign: "left",
        }}
      >
        {question.question}
      </Typography>

      {/* 画像 */}
      {(question.image ?? "/images/noimage/noimg.png") && (
        <Box
          component="img"
          src={
            question.image && question.image.trim() !== ""
              ? question.image
              : "/images/noimage/noimg.png"
          }
          alt="問題画像"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("/images/noimage/noimg.png") === -1) {
              target.src = "/images/noimage/noimg.png";
            }
          }}
          sx={{
            maxWidth: "100%",
            height: "250px",
            my: 1,
            flexShrink: 0,
          }}
        />
      )}

      {/* 選択肢 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          mt: 1,
          flexGrow: 1,
        }}
      >
        {question.choices.map((choice) => {
          const isSelected = selected === choice;
          const isCorrect = choice === question.answer;

          let bgColor = "#f5f5f5";
          let borderColor = "grey.400";

          if (selected) {
            if (isSelected) {
              bgColor = isCorrect ? "#d0f0c0" : "#f8d7da"; // 緑 or 赤
              borderColor = isCorrect ? "green" : "red";
            } else if (isCorrect) {
              borderColor = "green";
            }
          }

          return (
            <Button
              key={choice}
              variant="outlined"
              onClick={() => onAnswer(choice)}
              disabled={!!selected}
              sx={{
                fontSize: 12,
                p: 1,
                color: "#000",
                borderColor,
                backgroundColor: bgColor,
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  color: "#000",
                },
              }}
            >
              {choice}
              {selected && isSelected && showIcon === "correct" && (
                <CheckCircleOutlineIcon sx={{ color: "green", ml: 1 }} />
              )}
              {selected && isSelected && showIcon === "wrong" && (
                <CancelOutlinedIcon sx={{ color: "red", ml: 1 }} />
              )}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
