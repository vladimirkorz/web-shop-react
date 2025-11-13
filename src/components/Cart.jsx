function Cart({ cartItems, onRemove }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => onRemove(item.id)}>Удалить</button>
            </div>
          ))}
          <div className="total">
            <strong>Итого: ${totalPrice}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;