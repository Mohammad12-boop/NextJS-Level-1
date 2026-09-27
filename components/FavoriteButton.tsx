"use client";

import { useState } from "react";

export default function FavoriteButton({ initialFavorite }: { initialFavorite: boolean }) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite((value) => !value)}
    >
      {isFavorite ? "Favorited" : "Favorite"}
    </button>
  );
}
