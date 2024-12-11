import React from "react";

const CarDetails = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Reasons to Buy Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">Reasons to buy</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-purple-900">3 year warranty on mint condition car</h3>
              <p className="text-sm text-gray-600">
                Assured Plus car that comes in flawless condition and 3 year powertrain warranty
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-star"></i>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-purple-900">Premium variant</h3>
              <p className="text-sm text-gray-600">
                Fully loaded variant offering the best of features
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Overview Section */}
      <section>
        <h2 className="text-xl font-semibold text-purple-800 mb-4">Car Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
          <div>
            <p className="text-sm text-gray-600">Make Year</p>
            <p className="font-medium text-gray-800">Aug 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Registration Year</p>
            <p className="font-medium text-gray-800">Dec 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Fuel Type</p>
            <p className="font-medium text-gray-800">Diesel</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Km driven</p>
            <p className="font-medium text-gray-800">13K km</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Transmission</p>
            <p className="font-medium text-gray-800">Manual (Regular)</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">No. of Owner</p>
            <p className="font-medium text-gray-800">1st Owner</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Insurance Validity</p>
            <p className="font-medium text-gray-800">Nov 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Insurance Type</p>
            <p className="font-medium text-gray-800">Third Party</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">RTO</p>
            <p className="font-medium text-gray-800">DL3C</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Car Location</p>
            <p className="font-medium text-gray-800">Sector-29, Gurgaon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
