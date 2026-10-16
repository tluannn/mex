// Phân biệt rõ: loading / error / empty / success. Loading chỉ nằm ở slice courses.
export default function DataState({
  status,
  error,
  onRetry,
  isEmpty = false,
  empty = null,
  loadingText = "Loading courses...",
  children,
}) {
  if (status === "idle" || status === "loading") {
    return (
      <div className="state" role="status" aria-live="polite">
        <span className="spinner" aria-hidden="true" />
        <p>{loadingText}</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="state state-error" role="alert">
        <h3>Something went wrong</h3>
        <p>{error}</p>
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          Try again
        </button>
      </div>
    );
  }

  if (isEmpty) return empty;
  return children;
}
