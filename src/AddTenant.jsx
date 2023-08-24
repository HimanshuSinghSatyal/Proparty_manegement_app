import React, { memo } from "react";
import { Link } from 'react-router-dom';

function AddTenant({ onAddTenant, newTenant, setNewTenant }) {

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Add Tenant</h1>
      <div className="flex">
        <input
          type="text"
          className="border rounded px-2 py-1 w-40 mr-2"
          placeholder="Tenant Name"
          value={newTenant}
          onChange={(e) => {
            setNewTenant(e.target.value);
          }}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          onClick={onAddTenant}
        >
          Add
        </button>
      </div>

      <Link
        to="/"
        className="mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default memo(AddTenant);