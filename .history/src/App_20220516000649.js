import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  // creating a useState that picks data from my data js form
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => se}>clear all</button>
      </section>
    </main>
  );
}

export default App;
