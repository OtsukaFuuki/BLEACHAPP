"use client";
import { useState, useEffect } from "react";
/**
 * 引数で渡された画像URLの配列からランダムに1つ返すカスタムフック
 * @param images 画像URLの配列
 */
export const useRandomImage = (images: string[]) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    if (images.length === 0) return;
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
  }, [images]);

  return image;
};
