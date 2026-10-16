import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import CourseList from "../components/course/CourseList";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { useFavorites } from "../context/FavoritesContext";
import { ROUTES } from "../constants/routes";

export default function FavoritesPage() {
  const { courses, status, error, reload } = useCourses();
  const { favoriteIds } = useFavorites();
  const favoriteCourses = courses.filter((course) => favoriteIds.includes(course.id));

  return (
    <div className="container page">
      <h1>Favorite Courses</h1>
      <p className="muted">Courses you've saved for later.</p>

      <DataState
        status={status}
        error={error}
        onRetry={reload}
        isEmpty={favoriteCourses.length === 0}
        empty={
          <div className="empty empty-lg">
            <span className="empty-icon"><Heart size={24} /></span>
            <h3>No favorites yet</h3>
            <p>
              You haven't added any courses to your favorites yet. Browse courses and click the
              heart icon to save them.
            </p>
            <Link to={ROUTES.courses} className="btn btn-primary">Browse Courses</Link>
          </div>
        }
      >
        <CourseList courses={favoriteCourses} />
      </DataState>
    </div>
  );
}
