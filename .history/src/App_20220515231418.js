import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <main>
      <section className="conatiner">
        <h3>0 birthdays today</h3>
        <List />
      </section>
    </main>
  );
}

export default App;
