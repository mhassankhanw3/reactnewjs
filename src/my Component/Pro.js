import { useState } from "react";
import data from "./my data";
import List from "./my list";

function Pro() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3 className="app-head">{people.length} birthdays today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default Pro;
