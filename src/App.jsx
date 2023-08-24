
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PropertyList from './PropertyList';
import PropertyDetail from './PropertyDetail';


function App() {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-white font-semibold text-lg">
              Tenant Management
            </Link>
          </div>
        </nav>
        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/"
              element={
                <PropertyList />}
            />

            <Route path="/property/:id"
              element={
                <PropertyDetail />}
            />

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;

