const features = [
  {
    title: "Thiết kế responsive",
    description: "Giao diện tối ưu trên desktop, tablet và mobile.",
  },
  {
    title: "Kiến trúc App Router",
    description: "Dễ mở rộng module như blog, giỏ hàng, thanh toán online.",
  },
  {
    title: "Tối ưu SEO",
    description: "Metadata rõ ràng, cấu trúc nội dung chuẩn cho tìm kiếm.",
  },
  {
    title: "Sẵn sàng tích hợp API",
    description: "Có thể kết nối CMS, CRM hoặc hệ thống quản lý kho.",
  },
];

export function FeatureGrid() {
  return (
    <section className="section feature-alt">
      <div className="container">
        <div className="section-heading">
          <h2>Điểm mạnh của template</h2>
          <p>Nền tảng gọn nhẹ để đội ngũ tiếp tục phát triển nhanh.</p>
        </div>
        <div className="grid feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
