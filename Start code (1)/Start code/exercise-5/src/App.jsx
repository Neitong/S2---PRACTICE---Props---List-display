import React from "react";
import { data } from "./data.js";
import Card from "./Card.jsx";

function App() {
  return (
    <div className="app">
      <header>
        <h1>PNV Card Showcase</h1>
        <p>Check out some of our PNV superheroes!</p>
      </header>
      <main>
        <section className="cards-grid">
          {data.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;