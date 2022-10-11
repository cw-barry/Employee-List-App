import React, { useState } from 'react';
import dataFromFile from './data';
import List from './List';
function App() {
  const [data, setData] = useState(dataFromFile);
  const [people, setPeople] = useState(data.slice(0, 5));
  const [index, setIndex] = useState(0);
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>({people.length} Employees)</h5>
        <List people={people} />
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
