import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { selectUser } from "../features/auth/authSlice";
import { selectEnrollments } from "../features/myCourses/myCoursesSlice";
import { recommendedIds } from "../data/enrollments";
import { ROUTES } from "../constants/routes";

// Hours Learned và Average Score là số mock cố định (chưa có dữ liệu thật)
const MOCK_HOURS_LEARNED = 26;
const MOCK_AVERAGE_SCORE = "92%";

export default function DashboardPage() {
  const user = useSelector(selectUser);
  const enrollments = useSelector(selectEnrollments);
  const { courses, status, error, reload } = useCourses();

  const completedCount = enrollments.filter((item) => item.progress === 100).length;
  const inProgress = enrollments.filter((item) => item.progress < 100);
  const recommended = recommendedIds
    .map((courseId) => courses.find((course) => course.id === courseId))
    .filter(Boolean);

  const stats = [
    { label: "Enrolled Courses", value: enrollments.length, icon: BookOpen, tone: "blue" },
    { label: "Hours Learned", value: MOCK_HOURS_LEARNED, icon: Clock, tone: "purple" },
    { label: "Completed", value: completedCount, icon: Award, tone: "green" },
    { label: "Average Score", value: MOCK_AVERAGE_SCORE, icon: TrendingUp, tone: "orange" },
  ];

  return (
    <>
      <h1>Welcome back, {user.name}!</h1>
      <p className="muted">Here's what's happening with your learning journey today.</p>

      <div className="stat-cards">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="stat-card">
            <div>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
            <span className={`stat-icon square tone-${tone}`}><Icon size={20} /></span>
          </div>
        ))}
      </div>

      <DataState status={status} error={error} onRetry={reload}>
        <div className="dash-grid">
          <div className="panel">
            <div className="panel-head">
              <h3>Continue Learning</h3>
              <Link to={ROUTES.myCourses} className="link-primary">View All</Link>
            </div>
            {inProgress.length === 0 && <p className="muted">You have no courses in progress.</p>}
            {inProgress.map(({ courseId, progress, currentModule, timeLeft }) => {
              const course = courses.find((item) => item.id === courseId);
              if (!course) return null;
              return (
                <div key={courseId} className="learn-item">
                  <img src={course.thumbnail} alt="" />
                  <div>
                    <h4>{course.title}</h4>
                    <p>{currentModule}</p>
                    <div className="progress-meta">
                      <span>{progress}% Complete</span>
                      <span>{timeLeft}</span>
                    </div>
                    <div className="progress"><i style={{ width: `${progress}%` }} /></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="panel">
            <div className="panel-head">
              <h3>Recommended for You</h3>
              <Link to={ROUTES.courses} className="link-primary">Browse</Link>
            </div>
            {recommended.map((course, index) => (
              <div key={course.id} className={`reco ${index % 2 === 0 ? "blue" : "purple"}`}>
                <h4>{course.title}</h4>
                <p>
                  {index % 2 === 0
                    ? "Expand your skillset with design principles."
                    : "Perfect next step for your backend journey."}
                </p>
                <Link to={ROUTES.courseDetail(course.id)} className="btn btn-sm">View Course</Link>
              </div>
            ))}
          </div>
        </div>
      </DataState>
    </>
  );
}
