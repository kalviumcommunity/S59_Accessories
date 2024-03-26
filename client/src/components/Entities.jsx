import React, { useState, useEffect } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

export const fetchData = (setData) => {
  fetch('https://s59-accessories.onrender.com/api')
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => console.error('Error:', error));
};

function Entities() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchData(setEntities); 
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
                  <EditButton id={entity._id} name={entity.item} type={entity.type} description={entity.function} image={entity.image} material={entity.material} fetchData={() => fetchData(setEntities)} />
                  <DeleteButton id={entity._id} fetchData={() => fetchData(setEntities)} />
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
