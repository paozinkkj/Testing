import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text) return;
    setMessages([...messages, text]);
    setText("");
  };

  return (
    <div className="fixed bottom-0 left-0 bg-white p-4 shadow w-80">
      <h2 className="font-bold mb-2">Chat do Pedido</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2">
        {messages.map((m, idx) => <p key={idx}>{m}</p>)}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-1 w-full mb-1"
        placeholder="Mensagem..."
      />
      <button onClick={send} className="bg-blue-500 text-white px-2 py-1 w-full rounded">Enviar</button>
    </div>
  );
}
