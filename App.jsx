import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Chat from "./components/Chat";

const ADMIN_PASSWORD = "admin123"; // senha do administrador

const initialProducts = [
  {
    id: 1,
    name: "La Vacca Saturno Saturnita",
    price: 50000000,
    stock: 10,
    img: "https://beebom.com/wp-content/uploads/brainrot-secret1.png"
  },
  {
    id: 2,
    name: "Chimpanzini Spiderini",
    price: 100000000,
    stock: 5,
    img: "https://beebom.com/wp-content/uploads/brainrot-secret2.png"
  },
  {
    id: 3,
    name: "Los Tralaleritos",
    price: 150000000,
    stock: 3,
    img: "https://beebom.com/wp-content/uploads/brainrot-secret3.png"
  }
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = () => {
    const pass = prompt("Digite a senha do ADMIN:");
    if (pass === ADMIN_PASSWORD) setIsAdmin(true);
    else alert("Senha incorreta!");
  };

  return (
    <div className="p-4 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lontra Store</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          {isAdmin ? "ADMIN" : "Login ADMIN"}
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            cartItems={cartItems}
            setCartItems={setCartItems}
            isAdmin={isAdmin}
            products={products}
            setProducts={setProducts}
          />
        ))}
      </main>

      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <Chat />
    </div>
  );
}
