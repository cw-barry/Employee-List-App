import React, { useState } from 'react';
import dataFromFile from './data';
import List from './List';
function App() {
  const [data, setData] = useState(dataFromFile);
  const [people, setPeople] = useState(data.slice(0, 5));
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    let newIndex = index + 5;
    if (newIndex > data.length - 1) newIndex = 0;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };
  const handlePrev = () => {
    let newIndex = index - 5;
    if (newIndex < 0) newIndex = data.length - 5;
    setIndex(newIndex);
    setPeople(data.slice(newIndex, newIndex + 5));
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List people={people} />
        <div>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
