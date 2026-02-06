const aiModules = [
  "Tư vấn sản phẩm bằng chatbot tiếng Việt",
  "Gợi ý nội thất theo ảnh căn phòng",
  "Sinh mô tả sản phẩm tự động cho SEO",
  "Phân tích hành vi khách hàng để cá nhân hóa ưu đãi",
];

export function AiReadyRoadmap() {
  return (
    <section className="section container">
      <div className="section-heading">
        <h2>Roadmap mở rộng tính năng AI</h2>
        <p>
          Cấu trúc component hóa giúp tích hợp nhanh AI services từ OpenAI,
          Vertex AI hoặc các mô hình nội bộ.
        </p>
      </div>
      <ol className="roadmap">
        {aiModules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ol>
    </section>
  );
}
