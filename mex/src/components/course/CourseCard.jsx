import { memo } from "react";
import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Tag, Heart } from "lucide-react";
import Avatar from "../shared/Avatar";
import { ROUTES } from "../../constants/routes";

// Một CourseCard cho cả public và private:
// - public: không truyền `progress`
// - private (My Courses): truyền `progress` để hiện tiến độ học
function CourseCard({ course, isFavorite, onToggleFavorite, progress }) {
  const { id, title, description, category, level, lessons, price, instructor, thumbnail } = course;
  const isPrivateView = progress !== undefined;

  return (
    <article className="course-card">
      <div className="course-thumb">
        <img src={thumbnail} alt={title} loading="lazy" />
        <span className={`badge badge-${category}`}>{category}</span>
        <button
          type="button"
          className={`heart-btn ${isFavorite ? "active" : ""}`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onToggleFavorite(id)}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <Link to={ROUTES.courseDetail(id)} className="course-body">
        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{description}</p>
        <div className="course-meta">
          <span><BookOpen size={14} /> {lessons} Lessons</span>
          <span><BarChart3 size={14} /> {level}</span>
          <span className="cap"><Tag size={14} /> {category}</span>
        </div>

        {isPrivateView && (
          <div className="card-progress">
            <div className="progress-meta">
              <span>{progress === 100 ? "Completed" : `${progress}% Complete`}</span>
              <span className="link-primary">{progress === 100 ? "Review" : "Continue"}</span>
            </div>
            <div className="progress"><i style={{ width: `${progress}%` }} /></div>
          </div>
        )}

        <div className="course-footer">
          <span className="course-instructor">
            <Avatar name={instructor} size={22} /> {instructor}
          </span>
          <span className="course-price">${price}</span>
        </div>
      </Link>
    </article>
  );
}

export default memo(CourseCard);
