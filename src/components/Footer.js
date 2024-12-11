import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 text-white font-bold text-2xl rounded-full p-2">S</div>
            <span className="text-xl font-bold ml-2">Spinny</span>
          </div>
          <p className="text-sm">
            Spinny is the most trusted way of buying and selling used cars. Choose from over 5000 fully inspected second-hand car models. Select online and book a test drive at your home or at a Spinny Car Hub near you. Get a no-questions-asked 5-day money-back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Spinny car.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white text-xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-white text-xl"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="text-white text-xl"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white text-xl"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="text-sm mt-4">© 2024 Valuedrive Technologies Private Limited. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">ABOUT</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Spinny Assured</a></li>
            <li><a href="#" className="hover:underline">Who we are</a></li>
            <li><a href="#" className="hover:underline">Blog - Yellow Drive</a></li>
            <li><a href="#" className="hover:underline">FAQ's</a></li>
            <li><a href="#" className="hover:underline">How It Works</a></li>
            <li><a href="#" className="hover:underline">Inspection Process</a></li>
            <li><a href="#" className="hover:underline">Customer Reviews</a></li>
            <li><a href="#" className="hover:underline">Used Car Loan</a></li>
            <li><a href="#" className="hover:underline">Spinny Partners</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">BUY USED CAR IN</h3>
          <p className="text-sm">
            Delhi NCR | Bangalore | Hyderabad | Mumbai | Pune | Delhi | Gurgaon | Noida | Ahmedabad | Chennai | Kolkata | Lucknow | Jaipur | Chandigarh | Coimbatore | Faridabad | Ghaziabad | Indore | Kochi
          </p>
          <div className="mt-4">
            <a
              href="tel:7277277275"
              className="bg-red-500 text-white py-2 px-4 rounded-lg text-sm inline-block"
            >
              727-727-7275
            </a>
            <div className="flex space-x-4 mt-4">
              <button className="bg-white text-purple-900 py-2 px-4 rounded-lg text-sm hover:bg-gray-200">
                Get Instant Quotes
              </button>
              <button className="bg-white text-purple-900 py-2 px-4 rounded-lg text-sm hover:bg-gray-200">
                Browse Cars
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
