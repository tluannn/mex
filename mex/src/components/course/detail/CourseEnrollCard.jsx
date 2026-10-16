import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { ROUTES } from "../../../constants/routes";

export default function CourseEnrollCard({ course, isFavorite, isEnrolled, onToggleFavorite, onEnroll }) {
  const { id, title, price, thumbnail } = course;

  return (
    <aside className="buy-card">
      <img src={thumbnail} alt={title} />
      <div className="buy-price">
        <strong>${price}</strong>
        <button
          type="button"
          className={`heart-btn plain ${isFavorite ? "active" : ""}`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => onToggleFavorite(id)}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {isEnrolled ? (
        <Link to={ROUTES.myCourses} className="btn btn-primary btn-block">Go to My Courses</Link>
      ) : (
        <button type="button" className="btn btn-primary btn-block" onClick={() => onEnroll(course)}>
          Enroll Now
        </button>
      )}
      <button type="button" className="btn btn-outline btn-block">Preview Course</button>
      <p className="buy-note">30-Day Money-Back Guarantee</p>
    </aside>
  );
}
