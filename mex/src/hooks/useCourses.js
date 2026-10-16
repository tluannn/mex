import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourses,
  selectAllCourses,
  selectCoursesError,
  selectCoursesStatus,
} from "../features/courses/coursesSlice";

// Dùng ở cấp page: tự tải courses đúng 1 lần khi cần, trả về status để page hiển thị
export default function useCourses() {
  const dispatch = useDispatch();
  const courses = useSelector(selectAllCourses);
  const status = useSelector(selectCoursesStatus);
  const error = useSelector(selectCoursesError);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCourses());
  }, [status, dispatch]);

  const reload = useCallback(() => dispatch(fetchCourses()), [dispatch]);

  return { courses, status, error, reload };
}
