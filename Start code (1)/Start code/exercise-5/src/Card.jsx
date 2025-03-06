import React from "react";


export default function Card( { card }) {
    return (
    <div className="card" data-testid="card">
      <img src={card.image} alt={card.name} className="card-image" />
      <div className="card-content">
        <h2>{card.name}</h2>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
    );
}