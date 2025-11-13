import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Данные товаров
const products = [
  {
    id: 1,
    name: "Ноутбук игровой",
    price: 1500,
    image: "https://via.placeholder.com/200x150/4A90E2/FFFFFF?text=Laptop",
    description: "Мощный игровой ноутбук"
  },
  {
    id: 2,
    name: "Беспроводные наушники",
    price: 200,
    image: "https://via.placeholder.com/200x150/50E3C2/FFFFFF?text=Headphones",
    description: "Качественный звук"
  },
  {
    id: 3,
    name: "Смартфон",
    price: 800,
    image: "https://via.placeholder.com/200x150/9013FE/FFFFFF?text=Smartphone",
    description: "Новейшая модель"
  },
  {
    id: 4,
    name: "Клавиатура",
    price: 100,
    image: "https://via.placeholder.com/200x150/F5A623/FFFFFF?text=Keyboard",
    description: "Механическая клавиатура"
  }
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <ProductList 
          products={products} 
          onAdd={handleAddToCart} 
        />
        <Cart 
          cartItems={cartItems} 
          onRemove={handleRemoveFromCart} 
        />
      </div>
    </div>
  );
}

export default App;