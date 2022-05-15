import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <main>
      <section className="continer">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('you cleared me')}>clear all</button>
      </section>
    </main>
  );
}

export default App;
