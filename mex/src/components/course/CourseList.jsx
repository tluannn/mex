import CourseCard from "./CourseCard";
import { useFavorites } from "../../context/FavoritesContext";

// progressById (tùy chọn): { [courseId]: number } dùng cho khu vực private
export default function CourseList({ courses, progressById }) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isFavorite={favoriteIds.includes(course.id)}
          onToggleFavorite={toggleFavorite}
          progress={progressById?.[course.id]}
        />
      ))}
    </div>
  );
}
