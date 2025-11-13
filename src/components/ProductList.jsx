import Product from './Product';

function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      <h2>Каталог товаров</h2>
      <div className="products">
        {products.map((product) => (
          <Product 
            key={product.id}
            product={product} 
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;