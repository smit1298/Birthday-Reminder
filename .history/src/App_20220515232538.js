import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  // creating a useState that picks data from my data js form
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('you cleared me')}>clear all</button>
      </section>
    </main>
  );
}

export default App;
