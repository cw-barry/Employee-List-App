import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>({people.length} Employees)</h5>
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
