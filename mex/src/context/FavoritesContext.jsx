import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { loadJSON, saveJSON } from "../utils/storage";

// Favorites chỉ là tùy chọn UI cục bộ nên giữ Context (không chuyển sang Redux)
const FavoritesContext = createContext(null);
const STORAGE_KEY = "edupro_favorites";

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => loadJSON(STORAGE_KEY, []));

  useEffect(() => {
    saveJSON(STORAGE_KEY, favoriteIds);
  }, [favoriteIds]);

  // Hàm ổn định giữa các lần render để CourseCard (React.memo) không render lại thừa
  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const value = useMemo(() => ({ favoriteIds, toggleFavorite }), [favoriteIds, toggleFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export const useFavorites = () => useContext(FavoritesContext);
