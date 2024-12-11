import React from 'react'
import ThreeSixty from 'react-360-view'

const CarView = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen p-4">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-purple-600 font-bold hover:underline"
          onClick={() => window.history.back()}
        >
          &larr; Back to car details
        </button>
        <h1 className="text-lg font-bold text-gray-700">
          2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD
        </h1>
        <span className="text-lg font-bold text-gray-800">₹13.26 Lakh</span>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center">
        {/* Interactive Section */}

       
        <div className="relative w-full max-w-4xl aspect-video bg-gray-100 border rounded-lg overflow-hidden">
        <ThreeSixty
              amount={36}
              imagePath="/images/"
              fileName="thar360.jpeg"
              
            />

          {/* Spin Text */}
          <div className="absolute inset-x-0 top-0 flex flex-col items-center justify-start text-center text-white mt-4">
  <p className="font-bold">Spin and explore</p>
  <p className="text-sm text-white">Click and drag to rotate the car</p>
</div>

        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
            Exterior
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Interior
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
            Gallery
          </button>
        </div>
      </div>

      {/* Hotspot Section */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
          <p className="text-sm text-gray-600">Hotspots</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-purple-800 rounded-full"></span>
          <p className="text-sm text-gray-600">Details</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CarView
