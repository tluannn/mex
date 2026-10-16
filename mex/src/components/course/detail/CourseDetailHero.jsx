import { Link } from "react-router-dom";
import { ArrowLeft, User, Clock, BookOpen, BarChart3 } from "lucide-react";
import { ROUTES } from "../../../constants/routes";

export default function CourseDetailHero({ course }) {
  const { title, description, category, level, lessons, duration, instructor, status } = course;

  return (
    <section className="detail-hero">
      <div className="container">
        <Link to={ROUTES.courses} className="back-link">
          <ArrowLeft size={16} /> Back to courses
        </Link>
        <div className="badges">
          <span className={`badge badge-${category} static`}>{category}</span>
          <span className="badge badge-published static">{status}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul className="detail-meta">
          <li><User size={16} /> {instructor}</li>
          <li><Clock size={16} /> {duration}</li>
          <li><BookOpen size={16} /> {lessons} Lessons</li>
          <li><BarChart3 size={16} /> {level}</li>
        </ul>
      </div>
    </section>
  );
}
