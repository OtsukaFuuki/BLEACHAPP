"use client";
import { Container, Typography } from "@mui/material";
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

  if (questions.length === 0) return <div>問題を読み込み中...</div>;

  if (isFinished) {
    return (
      <Container>
        <Typography variant="h4">クイズ終了！</Typography>
        <Typography>
          スコア：{score} / {questions.length}
        </Typography>
        <AnswerHistory answers={answers} />
        <button onClick={handleRestart}>もう一度プレイする</button>
      </Container>
    );
  }

  const q = questions[current];

  return (
    <Container>
      <Typography>
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
