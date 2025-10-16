import React from "react";

export default function ProductCard({ product, cartItems, setCartItems, isAdmin, products, setProducts }) {
  const addToCart = () => {
    if (product.stock <= 0) return alert("Produto esgotado!");
    const existing = cartItems.find((i) => i.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      );
    } else setCartItems([...cartItems, { ...product, qty: 1 }]);
  };

  const editProduct = () => {
    const name = prompt("Novo nome:", product.name);
    const price = prompt("Novo preço:", product.price);
    const stock = prompt("Novo estoque:", product.stock);
    const img = prompt("Nova URL da imagem:", product.img);
    setProducts(products.map((p) => p.id === product.id ? { ...p, name, price, stock, img } : p));
  };

  return (
    <div className="border p-2 rounded shadow">
      <img src={product.img} alt={product.name} className="w-full h-48 object-cover mb-2" />
      <h2 className="font-bold">{product.name}</h2>
      <p>Preço: {product.price.toLocaleString()} 💰</p>
      <p>Estoque: {product.stock}</p>
      <button
        onClick={addToCart}
        className="bg-green-500 text-white px-2 py-1 rounded mt-2 w-full"
      >
        Adicionar ao Carrinho
      </button>
      {isAdmin && (
        <button
          onClick={editProduct}
          className="bg-yellow-500 text-white px-2 py-1 rounded mt-2 w-full"
        >
          Editar Produto
        </button>
      )}
    </div>
  );
}
