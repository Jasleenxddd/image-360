import React from "react";

const SimilarCars = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-md shadow-md mt-6">
  <h2 className="text-xl font-bold text-center text-purple-800">Similar Cars</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
    <div className="border rounded-md shadow-sm bg-white">
      <img src="/images/thar.jpg" alt="Car" className="rounded-t-md"/>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">2021 Mahindra Thar LX</h3>
        <p className="text-gray-600 text-sm">64K km | Diesel | Automatic</p>
        <p className="text-xl font-medium text-purple-600 mt-2">₹12.99 Lakh</p>
      </div>
    </div>
    <div className="border rounded-md shadow-sm bg-white">
      <img src="/images/thar8.jpg" alt="Car" className="rounded-t-md"/>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">2021 Mahindra Thar LX</h3>
        <p className="text-gray-600 text-sm">64K km | Diesel | Automatic</p>
        <p className="text-xl font-medium text-purple-600 mt-2">₹13.49 Lakh</p>
      </div>
    </div>
    <div className="border rounded-md shadow-sm bg-white">
      <img src="/images/thar9.jpg" alt="Car" className="rounded-t-md"/>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">2021 Mahindra Thar LX</h3>
        <p className="text-gray-600 text-sm">64K km | Diesel | Automatic</p>
        <p className="text-xl font-medium text-purple-600 mt-2">₹15.29 Lakh</p>
      </div>
    </div>
    <div className="border rounded-md shadow-sm bg-white">
      <img src="/images/thar1.jpg" alt="Car" className="rounded-t-md"/>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">2021 Mahindra Thar LX</h3>
        <p className="text-gray-600 text-sm">64K km | Diesel | Automatic</p>
        <p className="text-xl font-medium text-purple-600 mt-2">₹10.99 Lakh</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default SimilarCars;
