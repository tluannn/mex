import { createSlice } from "@reduxjs/toolkit";
import { enrollments as mockEnrollments } from "../../data/enrollments";

// Gắn course với user bằng danh sách enrollment: { courseId, progress, currentModule, timeLeft }
const initialState = { enrollments: mockEnrollments };

const myCoursesSlice = createSlice({
  name: "myCourses",
  initialState,
  reducers: {
    enroll(state, action) {
      const { courseId, timeLeft } = action.payload;
      const alreadyEnrolled = state.enrollments.some((item) => item.courseId === courseId);
      if (alreadyEnrolled) return;
      state.enrollments.push({
        courseId,
        progress: 0,
        currentModule: "Module 1: Introduction to Topic",
        timeLeft,
      });
    },
  },
});

export const { enroll } = myCoursesSlice.actions;
export const selectEnrollments = (state) => state.myCourses.enrollments;
export const selectIsEnrolled = (state, courseId) =>
  state.myCourses.enrollments.some((item) => item.courseId === courseId);
export default myCoursesSlice.reducer;
