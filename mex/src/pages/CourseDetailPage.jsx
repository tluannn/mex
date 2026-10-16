import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseDetail from "../components/course/detail/CourseDetail";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { useFavorites } from "../context/FavoritesContext";
import { selectCourseById } from "../features/courses/coursesSlice";
import { enroll, selectIsEnrolled } from "../features/myCourses/myCoursesSlice";
import { selectIsLoggedIn } from "../features/auth/authSlice";
import { ROUTES } from "../constants/routes";

// Page chỉ đọc URL và chuẩn bị dữ liệu / handler, UI nằm ở <CourseDetail />
export default function CourseDetailPage() {
  const { id } = useParams(); // id luôn là string, khớp với id string trong data mock
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { status, error, reload } = useCourses();
  const course = useSelector((state) => selectCourseById(state, id));
  const isEnrolled = useSelector((state) => selectIsEnrolled(state, id));
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { favoriteIds, toggleFavorite } = useFavorites();

  const handleEnroll = (selectedCourse) => {
    if (!isLoggedIn) {
      navigate(ROUTES.login, { state: { from: location.pathname } });
      return;
    }
    dispatch(enroll({ courseId: selectedCourse.id, timeLeft: `${selectedCourse.duration} left` }));
  };

  const notFound = (
    <div className="container page">
      <div className="empty">
        <h3>Course not found</h3>
        <p>The course you are looking for does not exist or has been removed.</p>
        <Link to={ROUTES.courses} className="btn btn-primary">Back to courses</Link>
      </div>
    </div>
  );

  return (
    <DataState status={status} error={error} onRetry={reload} isEmpty={!course} empty={notFound} loadingText="Loading course...">
      <CourseDetail
        course={course}
        isFavorite={favoriteIds.includes(id)}
        isEnrolled={isEnrolled}
        onToggleFavorite={toggleFavorite}
        onEnroll={handleEnroll}
      />
    </DataState>
  );
}
