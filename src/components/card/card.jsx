import React, { useState } from "react";

export default function Card({ name, setData, id }) {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(name);

  function deleteItem() {
    setData((pS) => pS.filter((item) => item.id !== id));
  }

  function editItem() {
    setEditMode(true);
  }

  function saveEdit() {
    setData((pS) =>
      pS.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName };
        }
        return item;
      })
    );
    setEditMode(false);
  }

  return (
    <div className="flex justify-between w-[300px] gap-3 items-center ">
      {editMode ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="outline-none px-3 w-[100%] border-2 shadow-md shadow-black rounded-md border-gray-600"
        />
      ) : (
        <h1>{name}</h1>
      )}
      <div className="flex items-center gap-4">
        {editMode ? (
          <button
            onClick={saveEdit}
            className="py-1 px-3 text-white rounded-md bg-blue-500"
          >
            Save
          </button>
        ) : (
          <button
            onClick={editItem}
            className="py-1 px-3 text-white rounded-md bg-green-500"
          >
            Edit
          </button>
        )}
        <button
          onClick={deleteItem}
          className="py-1 px-3 text-white rounded-md bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
