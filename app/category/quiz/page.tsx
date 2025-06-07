"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Button, Box } from "@mui/material";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { easyQuestions } from "@/data/easyQuestion";
import { hardQuestions } from "@/data/hardQuestion";
import { normalQuestions } from "@/data/normalQuestion";

type Question = {
  id: number;
  question: string;
  image?: string;
  choices: string[];
  answer: string;
};

function shuffleArray<T>(arr: T[]): T[] {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getQueryParams() {
  if (typeof window === "undefined") return { level: "easy", count: 5 };
  const params = new URLSearchParams(window.location.search);
  const level = params.get("level") ?? "easy";
  const count = Number(params.get("count")) || 5;
  return { level, count };
}

export default function Quiz() {
  const router = useRouter();

  const [level, setLevel] = useState("easy");
  const [count, setCount] = useState(5);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showIcon, setShowIcon] = useState<null | "correct" | "wrong">(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<
    { question: string; selected: string; correct: string }[]
  >([]);

  useEffect(() => {
    const { level: qLevel, count: qCount } = getQueryParams();
    setLevel(qLevel);
    setCount(qCount);
  }, []);

  useEffect(() => {
    let sourceQuestions: Question[] = [];

    if (level === "easy") sourceQuestions = easyQuestions;
    else if (level === "normal") sourceQuestions = normalQuestions;
    else if (level === "hard") sourceQuestions = hardQuestions;
    else sourceQuestions = easyQuestions;

    const shuffled = shuffleArray(sourceQuestions);
    setQuestions(shuffled.slice(0, count));

    // リセット
    setCurrent(0);
    setSelected(null);
    setShowIcon(null);
    setScore(0);
    setIsFinished(false);
    setAnswers([]);
  }, [level, count]);

  const handleAnswer = (choice: string) => {
    if (selected) return; // すでに選択済みなら無視

    setSelected(choice);
    const isCorrect = choice === questions[current].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setShowIcon("correct");
    } else {
      setShowIcon("wrong");
    }

    setTimeout(() => {
      setShowIcon(null);
      setSelected(null);

      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 1000);

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: choice,
        correct: questions[current].answer,
      },
    ]);
  };

  const handleRestart = () => {
    router.push("/category");
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
      setShowIcon(null);
    }
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
      setShowIcon(null);
    }
  };

  if (questions.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6">問題を読み込み中...</Typography>
      </Container>
    );
  }

  if (isFinished) {
    return (
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <Typography variant="h4" align="center">
          クイズ終了！
        </Typography>
        <Typography variant="h6" align="center">
          あなたのスコア：{score} / {questions.length}
        </Typography>

        {/* 回答履歴一覧 */}
        <Box
          sx={{
            maxHeight: 400,
            overflowY: "auto",
            mt: 3,
            pr: 1, // スクロールバーが被らないように右に少し余白
          }}
        >
          {answers.map((ans, i) => {
            const isCorrect = ans.selected === ans.correct;
            return (
              <Box key={i} mb={2} p={2} border="1px solid" borderRadius={2}>
                <Typography fontWeight="bold">
                  {i + 1}. {ans.question}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  あなたの答え: {ans.selected}
                </Typography>

                <Typography>正解: {ans.correct}</Typography>
              </Box>
            );
          })}
        </Box>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleRestart}>
            もう一度プレイする
          </Button>
        </Box>
      </Container>
    );
  }

  const q = questions[current];

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 2,
        px: 5,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          display: "flex",
          justifyContent: "right",
          mb: 1,
          fontSize: "0.875rem",
        }}
      >
        問題 {current + 1} / {questions.length}
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          flexShrink: 0,
          minHeight: 75,
          fontWeight: "semiBold",
          textAlign: "left",
        }}
      >
        {q.question}
      </Typography>

      {q.image && (
        <Box
          component="img"
          src={q.image}
          alt="問題画像"
          sx={{
            maxWidth: "100%",
            height: "250px",
            my: 1,
            flexShrink: 0,
          }}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          mt: 1,
          flexGrow: 1,
        }}
      >
        {q.choices.map((choice) => {
          const isSelected = selected === choice;
          const isCorrect = choice === q.answer;

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
              onClick={() => handleAnswer(choice)}
              disabled={!!selected}
              sx={{
                fontSize: 14,
                p: 1,
                color: "#000",
                borderColor,
                backgroundColor: bgColor,
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: !selected ? "#e0e0e0" : bgColor,
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

      {/* 丸バツの大表示 */}
      {showIcon && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
            backgroundColor: "rgba(255,255,255,0.4)",
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              color: showIcon === "correct" ? "success.light" : "error.light",
              fontSize: "6rem",
            }}
          >
            {showIcon === "correct" ? "〇" : "×"}
          </Typography>

          {showIcon === "wrong" && (
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: "error.main",
              }}
            >
              正解：{q.answer}
            </Typography>
          )}
        </Box>
      )}

      {/* ここから追加：下部の3ボタン */}
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "center",
          gap: 1, // 距離を近づける
          pt: 2,
          borderTop: "1px solid #ccc",
          flexShrink: 0,
        }}
      >
        {/* 前の問題 */}
        <Button
          onClick={handlePrev}
          disabled={current === 0}
          sx={{
            minWidth: 120,
            border: "none",
            background: "transparent",
            color: current === 0 ? "#999" : "#333",
          }}
        >
          ＜ 前の問題
        </Button>

        {/* トップに戻る（ナルト風グラデーション + ボーダー） */}
        <Button
          onClick={handleRestart}
          sx={{
            minWidth: 140,
            background: "transparent",
            border: "2px solid transparent",
            borderImage: "linear-gradient(to right, #ffa726, #ef5350) 1",
            backgroundImage: "linear-gradient(to right, #ffa726, #ef5350)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            "&:hover": {
              borderImage: "linear-gradient(to right, #fb8c00, #e53935) 1",
              backgroundImage: "linear-gradient(to right, #fb8c00, #e53935)",
            },
          }}
        >
          トップに戻る
        </Button>

        {/* 次の問題 */}
        <Button
          onClick={handleNext}
          disabled={current === questions.length - 1}
          sx={{
            minWidth: 120,
            fontWeight: "bold",
            border: "none",
            background: "transparent",
            color: current === questions.length - 1 ? "#999" : "#333",
          }}
        >
          次の問題 ＞
        </Button>
      </Box>
    </Container>
  );
}
