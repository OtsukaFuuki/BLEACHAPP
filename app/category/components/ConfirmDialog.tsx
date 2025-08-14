"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

type ConfirmDialogProps = {
  open: boolean;
  count: number;
  selectedLevel: string;
  difficultyLabelMap: Record<string, string>;
  onClose: () => void;
  onConfirm: () => void;
};

export const ConfirmDialog = ({
  open,
  count,
  selectedLevel,
  difficultyLabelMap,
  onClose,
  onConfirm,
}: ConfirmDialogProps) => {
  const theme = useTheme();
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: 16 }}>
        選択した設定の確認
      </DialogTitle>
      <DialogContent
        dividers
        sx={{
          maxWidth: 360,
          minHeight: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: 120, alignSelf: "flex-start" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
            問題数：{count} 問
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 14, mt: 2 }}>
            難易度：{selectedLevel && difficultyLabelMap[selectedLevel]}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundImage: 'url("/images/Dialog/dialog_1.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "250px",
            aspectRatio: "250 / 220",
            top: "15px",
            position: "relative",
          }}
        />
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} color="inherit" variant="outlined">
          戻る
        </Button>
        <Button
          onClick={onConfirm}
          sx={{ backgroundColor: theme.palette.custom.gold }}
          variant="contained"
        >
          問題へ進む
        </Button>
      </DialogActions>
    </Dialog>
  );
};
