export default function Avatar({ name = "?", size = 24 }) {
  return (
    <span
      className="avatar"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.45) }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  );
}
