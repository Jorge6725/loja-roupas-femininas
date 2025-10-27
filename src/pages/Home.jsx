import React from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="catalogo">
      <h1>Nova Coleção Primavera 🌸</h1>

      <div className="produtos">
        <div className="produto">
          <img 
            src="/imagens/conjunto-feminino-fitness-legging-e-top-roxo-large-3.avif" 
            alt="Conjunto feminino fitness legging e top roxo" 
          />
          <h3>Conjunto Fitness Roxo</h3>
          <p>R$ 89,90</p>
        </div>

        <div className="produto">
          <img src="/imagens/blusa1.jpg" alt="Blusa Casual" />
          <h3>Blusa Casual</h3>
          <p>R$ 59,90</p>
        </div>

        <div className="produto">
          <img src="/imagens/saia1.jpg" alt="Saia Midi" />
          <h3>Saia Midi</h3>
          <p>R$ 74,90</p>
        </div>
      </div>
    </div>
  );
}

