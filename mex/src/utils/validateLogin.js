// Trả về thông báo lỗi, hoặc chuỗi rỗng nếu hợp lệ
export function validateLogin(email, password) {
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
  if (password.length < 6) return "Password must be at least 6 characters.";
  return "";
}
