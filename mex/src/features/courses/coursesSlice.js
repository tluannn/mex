import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoursesApi } from "../../services/courseApi";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCoursesApi();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    // Chỉ tải khi chưa có dữ liệu hoặc lần trước bị lỗi: tránh gọi trùng / vòng lặp
    condition: (_, { getState }) => {
      const { status } = getState().courses;
      return status === "idle" || status === "failed";
    },
  }
);

// status: "idle" | "loading" | "succeeded" | "failed"
const initialState = { items: [], status: "idle", error: null };

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message;
      });
  },
});

export const selectAllCourses = (state) => state.courses.items;
export const selectCoursesStatus = (state) => state.courses.status;
export const selectCoursesError = (state) => state.courses.error;
export const selectCourseById = (state, id) => state.courses.items.find((course) => course.id === id);
export default coursesSlice.reducer;
