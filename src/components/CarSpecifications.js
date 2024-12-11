import React from "react";

const CarSpecifications = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
  <h2 className="text-xl font-bold text-purple-800">Car Specifications</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
    <div className="text-center">
      <p className="text-gray-500">Mileage (ARAI)</p>
      <p className="text-lg font-medium text-gray-800">15 kmpl</p>
    </div>
    <div className="text-center">
      <p className="text-gray-500">Ground Clearance</p>
      <p className="text-lg font-medium text-gray-800">226 mm</p>
    </div>
    <div className="text-center">
      <p className="text-gray-500">Fuel Tank Capacity</p>
      <p className="text-lg font-medium text-gray-800">57 litres</p>
    </div>
    <div className="text-center">
      <p className="text-gray-500">Displacement</p>
      <p className="text-lg font-medium text-gray-800">2184 cc</p>
    </div>
  </div>
  <div className="mt-4 text-right">
    <button className="px-4 py-2 bg-purple-100 border-purple-800  text-purple-800 rounded-md hover:bg-purple-100">
      View All Specifications
    </button>
  </div>
</div>

  );
};

export default CarSpecifications;
