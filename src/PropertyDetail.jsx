
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditTenant from './EditTenant';
import AddTenant from './AddTenant';


function PropertyDetail() {

  const [properties, setProperties] = useState([
    { id: 1, name: 'Property A', tenants: ['Tenant 1', 'Tenant 2'] },
    { id: 2, name: 'Property B', tenants: ['Tenant 3'] },
  ]);

  const [editIndex, setEditIndex] = useState(-1);

  const [newTenant, setNewTenant] = useState('');

  const [editedProperty, setEditedProperty] = useState(null);

  const { id } = useParams();
  const property = editedProperty || properties.find(prop => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }


  const handleRemoveTenant = index => {
    const updatedProperties = properties.map(prop =>
      prop.id === parseInt(id) ? { ...prop, tenants: prop.tenants.filter((_, i) => i !== index) } : prop
    );
    setProperties(updatedProperties);
  };


  const handleEditTenant = (index, newTenant) => {
    const updatedTenants = [...property.tenants];
    updatedTenants[index] = newTenant;

    const updatedProperties = properties.map(prop =>
      prop.id === parseInt(id) ? { ...prop, tenants: updatedTenants } : prop
    );

    console.log("Updated properties:", updatedProperties);
    setProperties(updatedProperties);
    setEditIndex(-1);
  };


  const handleAddTenant = () => {
    console.log('Adding tenant:', newTenant);
    if (newTenant.trim() !== '') {
      const updatedProperties = properties.map(prop =>
        prop.id === parseInt(id) ? { ...prop, tenants: [...prop.tenants, newTenant] } : prop
      );
      console.log('Updated properties:', updatedProperties);
      setProperties(updatedProperties);
      setNewTenant('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{property.name}</h1>
      <h2 className="text-lg mb-2">Tenants:</h2>
      <ul>{property.tenants.map((tenant, index) => (
        <li key={index} className="mb-1 flex items-center">
          {tenant}
          <button
            className="ml-2 text-red-600"
            onClick={() => handleRemoveTenant(index)}
          >
            Remove
          </button>

          <button
            className="ml-2 text-blue-600"
            onClick={() => setEditIndex(index)}
          >
            Edit
          </button>
        </li>
      ))}
      </ul>

      {editIndex > -1 && (
        <EditTenant
          index={editIndex}
          tenant={property.tenants[editIndex]}
          onSave={handleEditTenant}
        />
      )}

      <AddTenant
        onAddTenant={handleAddTenant}
        newTenant={newTenant}
        setNewTenant={setNewTenant}
      />
    </div>
  );
}

export default PropertyDetail;
