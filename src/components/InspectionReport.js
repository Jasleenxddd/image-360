import React from "react";

const InspectionReport = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="mb-8 ">
        <h2 className="text-xl font-semibold  text-purple-800 mb-4">Inspection Report</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-cogs"></i>
            </div>
            <p className="font-medium text-gray-800">Engine & Peripherals</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-car"></i>
            </div>
            <p className="font-medium text-gray-800">Drivetrain</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-shield-alt"></i>
            </div>
            <p className="font-medium text-gray-800">Body Structure</p>
            
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-paint-roller"></i>
            </div>
            <p className="font-medium text-gray-800">Exterior</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-couch"></i>
            </div>
            <p className="font-medium text-gray-800">Interior</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-wrench"></i>
            </div>
            <p className="font-medium text-gray-800">Mechanical</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-green-600 text-2xl">
              <i className="fas fa-tire"></i>
            </div>
            <p className="font-medium text-gray-800">Wheels & Tyres</p>
            <div className="text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700">
            VIEW FULL DETAILS
          </button>
        </div>
      </section>

      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          200-point inspection to ensure highest quality.{" "}
          <a href="#" className="text-purple-600 font-medium">
            Play Video
          </a>{" "}
          |{" "}
          <a href="#" className="text-purple-600 font-medium">
            View full checklist
          </a>
        </p>
      </footer>
    </div>
  );
};

export default InspectionReport;
