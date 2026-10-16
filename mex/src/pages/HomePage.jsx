import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Award, Zap } from "lucide-react";
import CourseList from "../components/course/CourseList";
import DataState from "../components/shared/DataState";
import useCourses from "../hooks/useCourses";
import { ROUTES } from "../constants/routes";

const STATS = [
  { value: "10k+", label: "Active Students", icon: Users, tone: "blue" },
  { value: "120+", label: "Expert Instructors", icon: Award, tone: "purple" },
  { value: "500+", label: "High-Quality Courses", icon: Zap, tone: "green" },
];

const PERKS = ["Lifetime Access", "Expert Instructors", "Certificate of Completion"];

export default function HomePage() {
  const { courses, status, error, reload } = useCourses();
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      <section className="hero">
        <span className="pill"><i className="dot" /> New courses available</span>
        <h1>
          Unlock Your Potential with <span className="text-primary">Expert-Led</span> Courses
        </h1>
        <p>
          Master the latest skills in coding, design, and business. Learn from industry experts
          and take your career to the next level.
        </p>
        <div className="hero-actions">
          <Link to={ROUTES.courses} className="btn btn-primary">
            Browse Courses <ArrowRight size={16} />
          </Link>
          <Link to={ROUTES.login} className="btn btn-outline">Start Free Trial</Link>
        </div>
        <ul className="perks">
          {PERKS.map((perk) => (
            <li key={perk}><CheckCircle2 size={16} /> {perk}</li>
          ))}
        </ul>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          {STATS.map(({ value, label, icon: Icon, tone }) => (
            <div key={label} className="stat">
              <span className={`stat-icon tone-${tone}`}><Icon size={20} /></span>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <h2>Featured Courses</h2>
            <p className="muted">Hand-picked courses to get you started</p>
          </div>
          <Link to={ROUTES.courses} className="link-muted">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <DataState status={status} error={error} onRetry={reload} isEmpty={featuredCourses.length === 0}
          empty={<div className="empty"><h3>No courses yet</h3><p>New courses will appear here soon.</p></div>}>
          <CourseList courses={featuredCourses} />
        </DataState>
      </section>

      <section className="container section">
        <div className="cta">
          <h2>Ready to start learning?</h2>
          <p>Join thousands of students and start your journey to success today.</p>
          <Link to={ROUTES.login} className="btn btn-white">Get Started for Free</Link>
        </div>
      </section>
    </>
  );
}
