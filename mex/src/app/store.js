import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import coursesReducer from "../features/courses/coursesSlice";
import myCoursesReducer from "../features/myCourses/myCoursesSlice";
import { loadJSON, saveJSON } from "../utils/storage";

const AUTH_KEY = "edupro_user";
const MY_COURSES_KEY = "edupro_my_courses";

// Khôi phục auth + myCourses sau khi reload
const savedUser = loadJSON(AUTH_KEY);
const savedEnrollments = loadJSON(MY_COURSES_KEY);

const preloadedState = {};
if (savedUser) preloadedState.auth = { isLoggedIn: true, user: savedUser };
if (Array.isArray(savedEnrollments)) preloadedState.myCourses = { enrollments: savedEnrollments };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    myCourses: myCoursesReducer,
  },
  preloadedState,
  // Redux DevTools được bật mặc định ở môi trường dev
});

store.subscribe(() => {
  const { auth, myCourses } = store.getState();
  saveJSON(AUTH_KEY, auth.user);
  saveJSON(MY_COURSES_KEY, myCourses.enrollments);
});
