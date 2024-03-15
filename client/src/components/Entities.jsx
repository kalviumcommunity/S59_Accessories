import React, { useState, useEffect } from 'react';

function Entities() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch('https://s59-accessories.onrender.com/api')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setEntities(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Lets see few of them ...</h1>
      <div id="container">
        {entities && entities.map(entity => (
          <div key={entity._id} className='box'>
            <div className='thumbnail'>
              <img src={entity.image} alt={entity.item} width="200px"/>
            </div>
            <div className="description">
              <div className="heading">
                <h3>{entity.item}</h3>
                <p>{entity.function}</p>
              </div><br></br>
              <span className="types">
                {entity.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;
