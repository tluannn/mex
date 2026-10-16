import { CheckCircle2, PlayCircle } from "lucide-react";

// Nội dung mock dùng chung cho mọi course
const LEARN_POINTS = Array.from(
  { length: 6 },
  (_, index) => ({ id: `learn-${index + 1}`, text: "Comprehensive understanding of core concepts and advanced techniques." })
);
const MODULES = Array.from({ length: 5 }, (_, index) => ({
  id: `module-${index + 1}`,
  title: `Module ${index + 1}: Introduction to Topic`,
  duration: "15:00",
}));

export default function CourseDetailBody({ course }) {
  const { instructor } = course;

  return (
    <div>
      <h2 className="h-sm">About This Course</h2>
      <p className="muted-dark">
        Stop struggling and start building. Learn modern techniques, best practices and
        real-world workflows taught by {instructor}.
      </p>

      <h2 className="h-sm">What You'll Learn</h2>
      <ul className="learn-grid">
        {LEARN_POINTS.map(({ id, text }) => (
          <li key={id}><CheckCircle2 size={16} /> {text}</li>
        ))}
      </ul>

      <h2 className="h-sm">Course Content</h2>
      <ul className="module-list">
        {MODULES.map(({ id, title, duration }) => (
          <li key={id}>
            <span><PlayCircle size={16} /> {title}</span>
            <small>{duration}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
