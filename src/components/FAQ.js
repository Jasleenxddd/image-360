import React from "react";

const FAQ = () => {
  return (
    <div className="bg-purple-100 p-6 rounded-md shadow-md mt-6">
  <h2 className="text-xl-2 font-bold text-center text-purple-900">Frequently Asked Questions</h2>
  <div className="mt-4">
    <details className="mb-4">
      <summary className="font-semibold text-gray-800 cursor-pointer">
        Q. When and where can I take a test drive?
      </summary>
      <p className="mt-2 text-gray-600">With our test drive booking form, you can conveniently schedule a test drive at home or visit our hub to try out multiple cars. Once you book your preferred option, your relationship manager will call you to confirm the details before arriving at your location. To know more about home test drives, please click on the following  link .</p>
    </details>
    <details className="mb-4">
      <summary className="font-semibold text-gray-800 cursor-pointer">
        Q. What’s the process for booking my car?
      </summary>
      <p className="mt-2 text-gray-600">You can book an Assured & Budget car of your liking for up to 5 days by placing a refundable deposit of Rs. 20,000. Similarly, for Spinny Max cars, it's Rs. 50,000. If you complete the vehicle purchase within the holding period, the deposit will be applied toward the purchase; otherwise, it will be refunded to you, and the booking will be cancelled.</p>
    </details>
    <details className="mb-4">
      <summary className="font-semibold text-gray-800 cursor-pointer">
      Q. Will Spinny help me with car finance?
      </summary>
      <p className="mt-2 text-gray-600">Absolutely, buyers can choose to avail financing through Spinny wherein we would get the loan processed through our finance partners. Our established partnerships help us process loans faster and get our customers better interest rates. Depending on your credit worthiness, you can avail used car loans through Spinny at interest rates as low as 12.99% compared to the market rates of 14-16%.</p>
    </details>
  </div>
  <div>

  </div>
</div>

  );
};

export default FAQ;
