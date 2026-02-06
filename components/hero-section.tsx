const quickActions = [
  "Xem bộ sưu tập phòng khách",
  "Đặt lịch tư vấn miễn phí",
  "Nhận phối cảnh 3D nhanh",
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="badge">Template Next.js cho nội thất</span>
        <h1>Thiết kế không gian sống hiện đại cùng LumiSpace</h1>
        <p>
          Mẫu website đã có sẵn cấu trúc mở rộng: landing page, danh mục sản
          phẩm, khu vực nội dung và roadmap tích hợp AI.
        </p>
        <div className="actions">
          <button type="button">Khám phá ngay</button>
          <button type="button" className="ghost">
            Xem bảng giá
          </button>
        </div>
        <ul>
          {quickActions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
