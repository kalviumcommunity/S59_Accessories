import React, { useState, useEffect } from 'react';

function Entities() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setEntities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lets see few of them ...</h1>
      <div id="container">
        {entities.map(entity => (
          <div key={entity.id}>
            <h2>{entity.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;
