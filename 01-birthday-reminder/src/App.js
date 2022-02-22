import React, { useState } from 'react';
import data from './data';
import List from './List';

function App(props) {
   
  const [ people, setPeople ] = useState(data);

  return (
    <main className="container">
      <h3> {people.length} birthday today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}> clear all</button>
    </main>
  );
}

export default App;