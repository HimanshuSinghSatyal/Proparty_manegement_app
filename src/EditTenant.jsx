import React, { useState } from 'react';

function EditTenant({ index, tenant, onSave }) {
  const [editedTenant, setEditedTenant] = useState(tenant);

  const handleSaveEdit = () => {
    onSave(index, editedTenant);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Edit Tenant</h1>
      <div className="flex">
        <input
          type="text"
          className="border rounded px-2 py-1 w-40 mr-2"
          placeholder="Edit Tenant Name"
          value={editedTenant}
          onChange={(e) => setEditedTenant(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleSaveEdit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditTenant;
