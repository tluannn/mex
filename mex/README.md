# EduPro – Learning Management System (front-end)

Ứng dụng LMS mô phỏng: xem danh sách khóa học, lưu yêu thích, đăng nhập giả lập và quản lý khóa học của tôi trong dashboard.

**Demo:** https://mex-nine.vercel.app/
**Repo:** https://github.com/tluannn/mex/tree/main/mex

## Tech stack
- React 19 + Vite
- React Router (public layout / private dashboard layout, nested route)
- Redux Toolkit + React-Redux (auth, courses, myCourses; async thunk)
- Context API (chỉ cho Favorites, là state UI cục bộ)
- Lucide React (icon), CSS thuần

## Tính năng
- Trang chủ, danh sách khóa học (tìm kiếm + lọc theo category), chi tiết khóa học (`/courses/:id`)
- Yêu thích khóa học (lưu localStorage)
- Đăng nhập giả lập, `PrivateRoute` bảo vệ `/dashboard/*`, giữ đăng nhập sau khi reload
- Dashboard: Overview, My Courses (có tiến độ), Settings; nút Enroll Now ở trang chi tiết
- Dữ liệu courses tải bất đồng bộ (giả lập) với trạng thái loading / error / empty
- Trang 404 cho cả khu vực public và dashboard

## Chạy dự án
```bash
npm install
npm run dev
```
Đăng nhập demo: email hợp lệ bất kỳ + mật khẩu từ 6 ký tự.

Giả lập lỗi tải dữ liệu: mở `http://localhost:5173/courses?fail=1` (lần tải đầu lỗi, bấm "Try again" sẽ thành công).

## Cấu trúc thư mục
```
src/
├── app/            store Redux
├── features/       slice: auth, courses, myCourses
├── services/       mock API bất đồng bộ
├── hooks/          useCourses
├── layouts/        MainLayout, DashboardLayout
├── pages/          mỗi route một page
├── components/     course/ (CourseCard, CourseList, detail/), shared/
├── context/        FavoritesContext
├── data/           dữ liệu mock
├── constants/      ROUTES
└── utils/
```

## Deploy
- **Vercel:** import repo; file `vercel.json` đã cấu hình rewrite về `index.html`.
- **Netlify:** build command `npm run build`, publish directory `dist`; file `public/_redirects` xử lý SPA routing.
