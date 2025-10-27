import React from "react";
import "../styles.css";

export default function Home() {
  return (
    <div className="catalogo">
      <h1>Nova Coleção Primavera 🌸</h1>

      <div className="produtos">
        {/* Conjunto Feminino Fitness Verde */}
        <div className="produto">
          <div className="imagens-produto">
            <img
              src="/imagens/conjunto-feminino-fitness-verde-1.jpg"
              alt="Conjunto feminino fitness legging e top verde (frente)"
            />
            <img
              src="/imagens/conjunto-feminino-fitness-verde-2.jpg"
              alt="Conjunto feminino fitness legging e top verde (costas)"
            />
          </div>
          <h3>Conjunto Feminino Fitness Verde</h3>
          <p>R$ 89,90</p>
        </div>
      </div>
    </div>
  );
}
