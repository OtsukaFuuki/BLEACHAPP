"use client";

import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "center",
        gap: 1,
        pt: 2,
        borderTop: `1px solid ${theme.palette.custom.grayBorder}`,
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
          color:
            current === 0
              ? theme.palette.custom.grayDisabled
              : theme.palette.custom.textDark,
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
          borderImage: `${theme.palette.custom.topButtonGradient} 1`,
          backgroundImage: theme.palette.custom.topButtonGradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          "&:hover": {
            borderImage: `${theme.palette.custom.topButtonGradientHover} 1`,
            backgroundImage: theme.palette.custom.topButtonGradientHover,
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
          color:
            current === total - 1
              ? theme.palette.custom.grayDisabled
              : theme.palette.custom.textDark,
        }}
      >
        次へ ＞
      </Button>
    </Box>
  );
};
