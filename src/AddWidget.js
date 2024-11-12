// src/AddWidget.js
import React, { useState } from "react";
import { firestore } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddWidget() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(firestore, "widgets"), {
        name,
        description,
        createdAt: serverTimestamp()
      });
      setName("");
      setDescription("");
      alert("Widget added successfully!");
    } catch (error) {
      console.error("Error adding widget:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Widget</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Widget Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
}

export default AddWidget;
