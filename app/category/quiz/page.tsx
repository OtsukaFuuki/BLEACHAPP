"use client";
import { Button, Container, Typography } from "@mui/material";
import { QuestionCard } from "./components/QuestionCard";
import { AnswerHistory } from "./components/AnswerHistory";
import { NavigationButtons } from "./components/NavigationButtons";
import { ResultOverlay } from "./components/ResultOverlay";
import { useQuiz } from "@/hooks/useQuiz";

const QuizPage = () => {
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
      <Container maxWidth="sm" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h6">問題を読み込み中...</Typography>
      </Container>
    );
  }
  if (isFinished) {
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
          mt: 3,
        }}
      >
        <Typography variant="h4">クイズ終了！</Typography>
        <Typography sx={{ mt: 1, fontSize: 18 }}>
          あなたのスコア：{score} / {questions.length}
        </Typography>
        <AnswerHistory answers={answers} />
        <Button
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "#fbc02d" }}
          onClick={handleRestart}
        >
          もう一度プレイする
        </Button>{" "}
      </Container>
    );
  }

  const q = questions[current];

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
        question={q}
        selected={selected}
        showIcon={showIcon}
        onAnswer={handleAnswer}
      />

      <ResultOverlay showIcon={showIcon} correctAnswer={q.answer} />

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
