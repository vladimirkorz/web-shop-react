function Product({ product, onAdd }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">${product.price}</div>
      <button onClick={() => onAdd(product)}>Добавить в корзину</button>
    </div>
  );
}

export default Product;