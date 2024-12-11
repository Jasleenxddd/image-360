import React, { useState } from "react";

const EmiCalc = () => {
    const [loanAmount, setLoanAmount] = useState(1060800);
    const [downPayment, setDownPayment] = useState(265200);
    const [duration, setDuration] = useState(66);
  
    const emi = Math.round(
      (loanAmount - downPayment) * 0.01 * (1 + 0.01) ** duration / ((1 + 0.01) ** duration - 1)
    );
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-xl text-purple-900 font-bold mb-4">Check Eligibility</h2>
  
        <div className="mb-6">
          <label className="block text-purple-900 text-sm font-medium mb-2">Loan Amount</label>
          <input
            type="range"
            min="100000"
            max="1326000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>₹1,00,000</span>
            <span>₹13,26,000</span>
          </div>
          <div className="text-right text-lg text-purple-800 font-semibold">₹{loanAmount.toLocaleString()}</div>
        </div>
  
        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-900 mb-2">Down Payment*</label>
          <input
            type="range"
            min="0"
            max="1226000"
            step="10000"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>₹0</span>
            <span>₹12,26,000</span>
          </div>
          <div className="text-right text-purple-800 text-lg font-semibold">₹{downPayment.toLocaleString()}</div>
        </div>
  
        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-900 mb-2">Duration of Loan</label>
          <input
            type="range"
            min="12"
            max="84"
            step="1"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>12 Months</span>
            <span>84 Months</span>
          </div>
          <div className="text-right text-lg  text-purple-800 font-semibold">{duration} Months</div>
        </div>
  
        <div className="text-center bg-gray-100 p-4 rounded-lg">
          <p className="text-lg text-purple-800 font-bold">₹{emi.toLocaleString()} per month</p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700">
            Check Eligibility
          </button>
          <p className="text-xs text-gray-500 mt-2">
            *Rate of interest can vary subject to credit profile. Loan approval is at the sole discretion of the finance partner.
          </p>
        </div>
      </div>
  )
}

export default EmiCalc
