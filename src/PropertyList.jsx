import React from 'react';
import { Link } from 'react-router-dom';

const properties = [
  { id: 1, name: 'Property A', tenants: ['Tenant 1', 'Tenant 2'] },
  { id: 2, name: 'Property B', tenants: ['Tenant 3'] },
];

function PropertyList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Property List</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id} className="mb-2">
            <Link
              to={`/property/${property.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {property.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
