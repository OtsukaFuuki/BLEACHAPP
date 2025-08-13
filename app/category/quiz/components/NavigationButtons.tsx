"use client";

import { Box, Button } from "@mui/material";

type Props = {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
};

export const NavigationButtons: React.FC<Props> = ({
  current,
  total,
  onPrev,
  onNext,
  onRestart,
}) => {
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "center",
        gap: 1,
        pt: 2,
        borderTop: "1px solid #ccc",
        flexShrink: 0,
      }}
    >
      {/* 前の問題 */}
      <Button
        onClick={onPrev}
        disabled={current === 0}
        sx={{
          minWidth: 120,
          border: "none",
          background: "transparent",
          color: current === 0 ? "#999" : "#333",
        }}
      >
        ＜ 前へ
      </Button>

      {/* トップに戻る */}
      <Button
        onClick={onRestart}
        sx={{
          minWidth: 140,
          background: "transparent",
          border: "1px solid transparent",
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
        onClick={onNext}
        disabled={current === total - 1}
        sx={{
          minWidth: 120,
          border: "none",
          background: "transparent",
          color: current === total - 1 ? "#999" : "#333",
        }}
      >
        次へ ＞
      </Button>
    </Box>
  );
};
