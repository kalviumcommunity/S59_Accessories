import React, { useState, useEffect } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

function Entities() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetch('https://s59-accessories.onrender.com/api')
      .then(response => response.json())
      .then(data => {
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
              <div className='flex'>
              <div className='types'>
              <span className="types">
                {entity.type}
                </span>
                </div>
                <div className='editSection flex'>
                <EditButton id={entity._id} name={entity.item} type={entity.type} description={entity.function} image={entity.image} material={entity.material} />
                <DeleteButton id={entity._id} />
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entities;