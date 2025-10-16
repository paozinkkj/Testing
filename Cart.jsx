import React from "react";

export default function Cart({ cartItems, setCartItems }) {
  const total = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0);

  const remove = (id) => setCartItems(cartItems.filter((i) => i.id !== id));

  return (
    <div className="fixed bottom-0 right-0 bg-gray-100 p-4 shadow w-80">
      <h2 className="font-bold text-lg mb-2">Carrinho</h2>
      {cartItems.length === 0 && <p>Vazio</p>}
      {cartItems.map((i) => (
        <div key={i.id} className="flex justify-between mb-1">
          <span>{i.name} x{i.qty}</span>
          <button onClick={() => remove(i.id)} className="text-red-500">X</button>
        </div>
      ))}
      {cartItems.length > 0 && <p className="font-bold">Total: {total.toLocaleString()}</p>}
    </div>
  );
}
