import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="catalogo">
      <h1>Nova Coleção Primavera 🌸</h1>

      <div className="produtos">
        <div className="produto">
          <img src=" " alt="Vestido Floral" />
          <h3>Vestido Floral</h3>
          <p>R$ 89,90</p>
        </div>

        <div className="produto">
          <img src=" " alt="Blusa Casual" />
          <h3>Blusa Casual</h3>
          <p>R$ 59,90</p>
        </div>

        <div className="produto">
          <img src="" alt="Saia Midi" />
          <h3>Saia Midi</h3>
          <p>R$ 74,90</p>
        </div>
      </div>
    </div>
  );
}
