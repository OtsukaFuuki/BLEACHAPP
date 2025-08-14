"use client";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { useQuiz } from "@/hooks/useQuiz";
import { AnswerHistory } from "./components/AnswerHistory";
import { NavigationButtons } from "./components/NavigationButtons";
import { QuestionCard } from "./components/QuestionCard";
import { ResultOverlay } from "./components/ResultOverlay";
import { useRandomImage } from "@/hooks/useRandomImage";

const QuizPage = () => {
  const theme = useTheme();

  // ランダム表示したい背景画像の配列
  const backgroundImages = [
    "/images/top/bg_9.jpeg",
    "/images/top/bg_5.jpeg",
    "/images/top/bg_18.jpeg",
    "/images/top/bg_4.jpeg",
    "/images/top/bg_21.jpeg",
  ];

  // カスタムフックでランダムな1枚を取得
  const randomImage = useRandomImage(backgroundImages);

  const {
    questions,
    current,
    selected,
    showIcon,
    isFinished,
    score,
    answers,
    handleAnswer,
    handleRestart,
    handlePrev,
    handleNext,
  } = useQuiz();

  if (questions.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center", mt: 4 }}>
        <Typography variant="h6">問題を読み込み中...</Typography>
      </Container>
    );
  }
  if (isFinished) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          pt: 4,
          pb: 1,
          px: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: randomImage ? `url(${randomImage})` : "none",
        }}
      >
        <Typography variant="h4">クイズ終了！</Typography>
        <Typography sx={{ mt: 1, fontSize: 18 }}>
          あなたのスコア：{score} / {questions.length}
        </Typography>
        <AnswerHistory answers={answers} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.custom.gold,

            color: "#fff",
            width: "180px",
            display: "flex",
            justifyContent: "center",
            maxWidth: "100%",
            margin: "40px auto 0",
          }}
          onClick={handleRestart}
        >
          もう一度プレイする
        </Button>
      </Container>
    );
  }
  const currentQuestion = questions[current];

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 1,
        px: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ display: "flex", justifyContent: "right", mb: 1 }}
      >
        問題 {current + 1} / {questions.length}
      </Typography>

      <QuestionCard
        question={currentQuestion}
        selected={selected}
        showIcon={showIcon}
        onAnswer={handleAnswer}
      />

      <ResultOverlay
        showIcon={showIcon}
        correctAnswer={currentQuestion.answer}
      />

      <NavigationButtons
        current={current}
        total={questions.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onRestart={handleRestart}
      />
    </Container>
  );
};

export default QuizPage;
