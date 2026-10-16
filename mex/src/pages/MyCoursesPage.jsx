import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseList from "../components/course/CourseList";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { selectEnrollments } from "../features/myCourses/myCoursesSlice";
import { ROUTES } from "../constants/routes";

// Page chỉ lấy dữ liệu theo user, phần hiển thị card do CourseList / CourseCard đảm nhiệm
export default function MyCoursesPage() {
  const enrollments = useSelector(selectEnrollments);
  const { courses, status, error, reload } = useCourses();

  const myCourses = enrollments
    .map(({ courseId }) => courses.find((course) => course.id === courseId))
    .filter(Boolean);

  const progressById = Object.fromEntries(
    enrollments.map(({ courseId, progress }) => [courseId, progress])
  );

  return (
    <>
      <h1>My Courses</h1>
      <p className="muted">Manage and continue your enrolled courses.</p>

      <DataState
        status={status}
        error={error}
        onRetry={reload}
        isEmpty={myCourses.length === 0}
        empty={
          <div className="empty">
            <h3>You haven't enrolled in any course yet</h3>
            <p>Browse the catalog and enroll to start learning.</p>
            <Link to={ROUTES.courses} className="btn btn-primary">Browse Courses</Link>
          </div>
        }
      >
        <CourseList courses={myCourses} progressById={progressById} />
      </DataState>
    </>
  );
}
