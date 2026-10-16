import { useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";
import CourseList from "../components/course/CourseList";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { CATEGORIES } from "../data/courses";

export default function CoursesPage() {
  const { courses, status, error, reload } = useCourses();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    const query = keyword.trim().toLowerCase();
    return courses.filter(
      (course) =>
        (category === "all" || course.category === category) &&
        (query === "" ||
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query))
    );
  }, [courses, keyword, category]);

  return (
    <div className="container page">
      <div className="page-head">
        <div>
          <h1>Explore Courses</h1>
          <p className="muted">Discover new skills and advance your career path</p>
        </div>
        <div className="toolbar">
          <label className="input-icon">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search courses..."
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </label>
          <label className="input-icon select">
            <Filter size={16} />
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="all">All Categories</option>
              {CATEGORIES.map((item) => (
                <option key={item} value={item} className="cap">{item}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <DataState
        status={status}
        error={error}
        onRetry={reload}
        isEmpty={filteredCourses.length === 0}
        empty={
          <div className="empty">
            <h3>No courses found</h3>
            <p>Try a different keyword or choose another category.</p>
          </div>
        }
      >
        <CourseList courses={filteredCourses} />
      </DataState>
    </div>
  );
}
