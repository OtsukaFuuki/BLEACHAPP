"use client";
import { Button, Container, Typography, useTheme } from "@mui/material";
import { useQuiz } from "@/hooks/useQuiz";
import { AnswerHistory } from "./components/answerHistory";
import { NavigationButtons } from "./components/navigationButtons";
import { QuestionCard } from "./components/questionCard";
import { ResultOverlay } from "./components/resultOverlay";

const QuizPage = () => {
  const theme = useTheme();

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
          sx={{ backgroundColor: theme.palette.custom.gold, mt: 3 }}
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
