import React from "react";

const TopFeatures = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md mt-6">
  <h2 className="text-xl font-bold text-purple-800">Top Features of this Car</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Comfort & Convenience</h3>
      <ul className="list-disc ml-4 mt-2 text-purple-900">
        <li>Cruise Control</li>
        <li>Steering Mounted Controls</li>
        <li>Driver Height Adjustable Seat</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Safety</h3>
      <ul className="list-disc ml-4 mt-2 text-purple-900">
        <li>Airbags</li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Entertainment & Communication</h3>
      <ul className="list-disc ml-4 mt-2 text-purple-900">
        <li>Integrated (in-dash) Music System</li>
        <li>Touchscreen Infotainment System</li>
        <li>Apple CarPlay / Android Auto</li>
        <li>GPS Navigation System</li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default TopFeatures;
