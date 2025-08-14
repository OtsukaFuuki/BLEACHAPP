"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { easyQuestions } from "@/data/easyQuestion";
import { normalQuestions } from "@/data/normalQuestion";
import { hardQuestions } from "@/data/hardQuestion";

export type Question = {
  id: number;
  question: string;
  image?: string;
  choices: string[];
  answer: string;
};

export type Answer = {
  question: string;
  selected: string;
  correct: string;
};

// 配列をシャッフルする関数
const shuffleArray = <T>(arr: T[]): T[] => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// URLクエリからパラメータ取得
const getQueryParams = () => {
  if (typeof window === "undefined") return { level: "easy", count: 5 };
  const params = new URLSearchParams(window.location.search);
  const level = params.get("level") ?? "easy";
  const count = Number(params.get("count")) || 5;
  return { level, count };
};

export const useQuiz = () => {
  const router = useRouter();
  const [level, setLevel] = useState("easy");
  const [count, setCount] = useState(5);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showIcon, setShowIcon] = useState<null | "correct" | "wrong">(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  // 初期パラメータ取得
  useEffect(() => {
    const { level: qLevel, count: qCount } = getQueryParams();
    setLevel(qLevel);
    setCount(qCount);
  }, []);

  // 問題セットアップ
  useEffect(() => {
    let sourceQuestions: Question[] = [];

    if (level === "easy") sourceQuestions = easyQuestions;
    else if (level === "normal") sourceQuestions = normalQuestions;
    else if (level === "hard") sourceQuestions = hardQuestions;
    else sourceQuestions = easyQuestions;

    const shuffled = shuffleArray(sourceQuestions);
    setQuestions(shuffled.slice(0, count));
    setCurrent(0);
    setSelected(null);
    setShowIcon(null);
    setScore(0);
    setIsFinished(false);
    setAnswers([]);
  }, [level, count]);

  const handleAnswer = (choice: string) => {
    if (selected) return;

    setSelected(choice);
    const isCorrect = choice === questions[current].answer;

    if (isCorrect) setScore((prev) => prev + 1);
    setShowIcon(isCorrect ? "correct" : "wrong");

    setAnswers((prev) => [
      ...prev,
      {
        question: questions[current].question,
        selected: choice,
        correct: questions[current].answer,
      },
    ]);

    setTimeout(() => {
      setShowIcon(null);
      setSelected(null);
      if (current + 1 < questions.length) setCurrent((prev) => prev + 1);
      else setIsFinished(true);
    }, 1000);
  };

  const handleRestart = () => router.push("/category");

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

  return {
    questions,
    current,
    selected,
    showIcon,
    score,
    isFinished,
    answers,
    handleAnswer,
    handleRestart,
    handlePrev,
    handleNext,
  };
};
