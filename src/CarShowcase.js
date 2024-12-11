// Install dependencies: npm install react react-dom react-slick slick-carousel
// Add Tailwind CSS to your project by setting up a Tailwind configuration
// Import necessary CSS files for the carousel
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from'./components/Navbar'
import { Nav } from "react-bootstrap";
import CarDetails from "./components/CarDetails";
import InspectionReport from "./components/InspectionReport";
import CarSpecifications from "./components/CarSpecifications";
import TopFeatures from "./components/TopFeatures";
import SimilarCars from "./components/SimilarCars";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PictureScroll from './components/PictureScroll';
import CarView from "./components/CarView";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
const CarShowcase = () => {
  const [numInvites, setNumInvites] = useState(0);
  const [eventDuration, setEventDuration] = useState(0);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const images = [
    "/images/thar1.jpg",
    "/images/thar2.jpg",
    "/images/thar3.jpg",
    "/images/thar4.jpg",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const navigate = useNavigate(); // Use the hook at the top level of the component

  const calculatePrice = () => {
    // Example pricing logic: $50 per invite and $20 per hour of duration
    const price = numInvites * 50 + eventDuration * 20;
    setCalculatedPrice(price);
  };

  const handleCalculator = () => {
    navigate("/EmiCalc");
  };
  const handleNavigate = () => {
    navigate("/CarView"); // Define navigation inside a separate handler
  };
  const carDetails = {
    model: "Tesla Model S",
    year: 2022,
    mileage: "15,000 miles",
    price: "$80,000",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <>
    <Navbar/>
    <div className="p-10 bg-gray-100">
     <div className="flex flex-col lg:flex-row">
  {/* Picture Scroll */}
  <div className="lg:w-2/3">
  <div >
  {/* Carousel Wrapper */}
  <div className="flex items-center justify-center">
        {/* Previous Image */}
        <div className="w-1/4 p-2">
          <img
            className="w-full h-auto object-cover"
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
          />
        </div>

        {/* Current Image */}
        <div className="w-1/2 p-2">
          <img
            className="w-full h-auto object-cover"
            src={images[currentIndex]}
            alt="Current"
          />
        </div>

        {/* Next Image */}
        <div className="w-1/4 p-2">
          <img
            className="w-full h-auto object-cover"
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
          />
        </div>
      </div>

      {/* Previous and Next Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white px-4 py-2 rounded-full"
        onClick={handlePrev}
      >
        Previous
      </button>

      <button
  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white px-4 py-2 rounded-full"
  onClick={handleNext}
  style={{ right: "calc(33.33%)" }}  // This moves the button to 2/3 of the screen width
>
  Next
</button>

      
      {/* 360° View Button */}
      <div className="mb-8 flex items-center justify-center">
      <button
                  onClick={handleNavigate} // Call the handler function here
                  className="px-4 py-2 bg-gray-100 text-purple-800 font-bold rounded hover:bg-white"
                >
          View 360°
        </button>
      </div>

      {/* Price Calculator */}
      <div className="max-w-md  p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Price Calculator</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium text-purple-900">Number of Invites:</label>
          <input
            type="number"
            value={numInvites}
            onChange={(e) => setNumInvites(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium text-purple-900">Duration of Event (hours):</label>
          <input
            type="number"
            value={eventDuration}
            onChange={(e) => setEventDuration(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={calculatePrice}
            className="px-4 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-600"
          >
            Calculate Price
          </button>
          <button
            type="button"
            onClick={() => navigate("/EmiCalc")}
            className="px-4 py-2 bg-purple-900 text-white font-bold rounded hover:bg-purple-900"
          >
            Go to EMI Calculator
          </button>
        </div>
      </form>
      <div className="text-xl font-semibold text-black mt-4">
        Calculated Price: ${calculatedPrice}
      </div>
    </div>
      <CarDetails/>
  <InspectionReport/>
  <CarSpecifications/>
  <TopFeatures/>
  
    </div>
  </div>
  

  {/* Car Overview Section */}
  <div className="lg:w-1/3 sticky top-10" style={{ position: 'sticky', top: '10px' }}>
  <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Header Banner */}
      <div className="bg-purple-500 text-white px-4 py-2 flex items-center justify-between">
        <p className="text-sm font-semibold">Sweet December</p>
        <p className="text-xs">Free car for 3 lucky buyers, and a meet with Sachin</p>
      </div>

      {/* Car Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold">2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD</h2>
        <p className="text-sm text-gray-600 mt-2">13K km · Diesel · Manual</p>
        <p className="flex items-center text-sm text-gray-600 mt-1">
          <svg
            className="w-4 h-4 mr-1 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.88 3.549a9 9 0 11-5.76 16.824m-5.57-5.57a9 9 0 1116.82-5.75M9.1 9.1l.39 3.01-3.01-.39 2.62-2.62z"
            />
          </svg>
          Spinny Car Hub, Trillium Avenue, Gurgaon
        </p>

        {/* Assured Badge */}
        <div className="flex items-center mt-4">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 text-xs font-semibold rounded-full">
            Assured+
          </span>
          <span className="text-xs text-gray-500 ml-2">Latest cars, 3-year warranty</span>
        </div>

        {/* Price Section */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">₹13.26 Lakh</p>
            <a href="#" className="text-sm text-purple-700 underline">
              View benefits
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-1">Fixed on-road price</p>
        </div>

        {/* Inventory Message */}
        <div className="bg-gray-100 text-gray-600 text-sm mt-4 p-3 rounded">
          This inventory is no longer available with us. View similar cars.
        </div>

        {/* Call-to-Action Button */}
        <button className="w-full bg-purple-600 text-white font-bold py-2 mt-4 rounded">
          VIEW SIMILAR CARS
        </button>
      </div>

      {/* Footer */}
      <div className="border-t p-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">Share with a friend :</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M15 3h4a2 2 0 012 2v4M5 3h4m-5 8h16"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.1 3c-2.49 0-4.5 2.01-4.5 4.5a4.5 4.5 0 001.35 3.16c-3.76-.19-7.12-1.98-9.34-4.7a4.5 4.5 0 001.39 6.01A4.48 4.48 0 013 11.03v.06a4.5 4.5 0 003.61 4.4 4.5 4.5 0 01-2.03.08 4.5 4.5 0 004.19 3.12A9.02 9.02 0 013 21v-.03a12.94 12.94 0 007 2.03c8.25 0 12.75-6.83 12.75-12.75v-.58A9.02 9.02 0 0023 3z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12h-4v8H8v-8H4l8-8 8 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    



  </div>
</div>



      
<SimilarCars/>
  <FAQ/>
    </div>
    <Footer/>

    </>
    
  );
};

export default CarShowcase;
