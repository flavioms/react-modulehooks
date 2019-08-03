import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const techStorage = localStorage.getItem('tech');
    if (techStorage) {
      setTech(JSON.parse(techStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
