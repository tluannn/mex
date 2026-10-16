import CourseDetailHero from "./CourseDetailHero";
import CourseDetailBody from "./CourseDetailBody";
import CourseEnrollCard from "./CourseEnrollCard";

export default function CourseDetail({ course, isFavorite, isEnrolled, onToggleFavorite, onEnroll }) {
  return (
    <>
      <CourseDetailHero course={course} />
      <div className="container detail-layout">
        <CourseDetailBody course={course} />
        <CourseEnrollCard
          course={course}
          isFavorite={isFavorite}
          isEnrolled={isEnrolled}
          onToggleFavorite={onToggleFavorite}
          onEnroll={onEnroll}
        />
      </div>
    </>
  );
}
