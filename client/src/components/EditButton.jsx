import React, { useState } from 'react';

async function handleEdit(id, data) {
  console.log(data);
  try {
    const response = await fetch(`https://s59-accessories.onrender.com/api/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(`Error editing entity with ID ${id}: ${response.statusText}`);
    }
    fetchData()
    console.log(`Edit entity with ID: ${id}`);
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.error('Error editing entity:', err.message);
  }
}

function EditButton({ id, name, type, image, description, material , fetchData}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedType, setEditedType] = useState(type);
  const [editedImage, setEditedImage] = useState(image);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedMaterial, setEditedMaterial] = useState(material.join(', '));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setEditedName(value);
        break;
      case 'type':
        setEditedType(value);
        break;
      case 'image':
        setEditedImage(value);
        break;
      case 'description':
        setEditedDescription(value);
        break;
      case 'material':
        setEditedMaterial(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const data = {
      item: editedName,
      type: editedType,
      image: editedImage,
      description: editedDescription,
      material: editedMaterial.split(',').map(material => material.trim()) 
    };
    handleEdit(id, data , fetchData);
    setIsEditing(false);
    
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {!isEditing && (
        <button onClick={handleEditClick}><img src="https://cdn-icons-png.flaticon.com/512/4277/4277132.png" alt="edit" width="20px" /></button>
      )}
      {isEditing && (
        <form className='editform'>
          <label>
            Name:
            <input type="text" name="name" value={editedName} onChange={handleInputChange} />
          </label>
          <label>
            Type:
            <input type="text" name="type" value={editedType} onChange={handleInputChange} />
          </label>
          <label>
            Image:
            <input type="text" name="image" value={editedImage} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <textarea type="text" name="description" value={editedDescription} onChange={handleInputChange} />
          </label>
          <label>
            Material:
            <input name="material" value={editedMaterial} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </div>
  );
}

export default EditButton;
