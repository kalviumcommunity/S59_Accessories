import React, { useState, useEffect } from "react";

async function handleAddItem(data) {
  try {
    const response = await fetch(
      "https://s59-accessories.onrender.com/api/add-accessory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error(`Error adding item: ${response.statusText}`);
    }
    console.log("Item added successfully");
    const responseData = await response.json();
    console.log(responseData);
    return true;
  } catch (error) {
    console.error("Error adding item:", error.message);
    return false;
  }
}

function AddItem() {
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemMaterial, setItemMaterial] = useState("");
  const [formError, setFormError] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    let confirmationTimer;
    if (confirmationMessage) {
      confirmationTimer = setTimeout(() => {
        setConfirmationMessage("");
      }, 3000);
    }
    return () => clearTimeout(confirmationTimer);
  }, [confirmationMessage]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "itemName":
        setItemName(value);
        break;
      case "itemType":
        setItemType(value);
        break;
      case "itemImage":
        setItemImage(value);
        break;
      case "itemDescription":
        setItemDescription(value);
        break;
      case "itemMaterial":
        setItemMaterial(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    if (
      !itemName ||
      !itemType ||
      !itemImage ||
      !itemDescription ||
      !itemMaterial
    ) {
      setFormError("Please fill in all the required fields.");
      setTimeout(() => {
        setFormError("");
      }, 3000);
      return;
    }

    const data = {
      item: itemName,
      type: itemType,
      image: itemImage,
      material: itemMaterial.split(",").map((material) => material.trim()),
      function: itemDescription,
    };
    const success = await handleAddItem(data);
    if (success) {
      setConfirmationMessage("Item added successfully.");
      setItemName("");
      setItemType("");
      setItemImage("");
      setItemDescription("");
      setItemMaterial("");
      setTimeout(() => {
        setConfirmationMessage("");
      }, 3000);
    }
  };

  return (
    <div className="addItemContainer">
      <form className="addItemForm">
        <h2>Add New Item</h2>
        {formError && (
          <div className="errorPopup">
            <p className="errorMessage">
              <span style={{ backgroundColor: "white" }}>❌</span>
              {formError}
            </p>
            <div className="errorLine"></div>
          </div>
        )}
        {confirmationMessage && (
          <div className="confirmationMessage">
            <p>✅{confirmationMessage}</p>
            <div className="errorLine"></div>
          </div>
        )}
        <label>
          Name<span style={{ color: "red" }}>*</span>:
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleInputChange}
            placeholder="Enter product name"
          />
        </label>
        <label>
          Type<span style={{ color: "red" }}>*</span>:
          <input
            type="text"
            name="itemType"
            value={itemType}
            onChange={handleInputChange}
            placeholder="Enter type ie. Fashion Accessory" 
          />
        </label>
        <label>
          Image<span style={{ color: "red" }}>*</span>:
          <input
            type="text"
            name="itemImage"
            value={itemImage}
            onChange={handleInputChange}
            placeholder="Enter image URL"
          />
        </label>
        <label>
          Description<span style={{ color: "red" }}>*</span>:
          <textarea
            name="itemDescription"
            value={itemDescription}
            onChange={handleInputChange}
            placeholder="Enter description of the product"
          />
        </label>
        <label>
          Material used
          <span style={{ color: "grey" }}>(separated by commas)</span>:
          <input
            name="itemMaterial"
            value={itemMaterial}
            onChange={handleInputChange}
            placeholder="Enter materials used in it"
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
