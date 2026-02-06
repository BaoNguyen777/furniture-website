import { products } from "@/data/products";

export function ProductShowcase() {
  return (
    <section className="section container">
      <div className="section-heading">
        <h2>Sản phẩm nổi bật</h2>
        <p>Các mẫu nội thất bán chạy, tối ưu cho căn hộ và nhà phố hiện đại.</p>
      </div>
      <div className="grid cards">
        {products.map((product) => (
          <article key={product.name} className="card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="meta">
              <span>{product.category}</span>
              <strong>{product.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
