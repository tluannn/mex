import { courses } from "../data/courses";

const DELAY_MS = 800;
let hasFailedOnce = false;

// Mở /courses?fail=1 để giả lập lỗi ở lần tải đầu tiên (bấm "Try again" sẽ thành công)
function shouldSimulateFailure() {
  const wantsFailure = new URLSearchParams(window.location.search).get("fail") === "1";
  if (wantsFailure && !hasFailedOnce) {
    hasFailedOnce = true;
    return true;
  }
  return false;
}

export function fetchCoursesApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSimulateFailure()) {
        reject(new Error("Network error: could not load courses."));
        return;
      }
      resolve(courses.map((course) => ({ ...course })));
    }, DELAY_MS);
  });
}
