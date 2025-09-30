import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { assets } from "../assets/assets";
import { Link } from 'react-router-dom'


const BuyCheckerPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    network: "",
    quantity: 1
  });

  const networks = ["Telecel", "MTN", "AT"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle purchase logic here
    console.log('Purchase data:', formData);
    alert('Checker PIN purchase initiated!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="text-center mb-12 bg-purple-600 mt-20 p-16">
          <h1 className="text-6xl font-bold mb-4 text-white">Buy Checker</h1>
          <p className="text-lg text-white">
            Get your checkers here at an affordable price
          </p>
        </div>

        {/* Description */}
        <p className="text-center text-gray-600 text-xl mb-12 max-w-2xl mx-auto px-4">
          Secure your WAEC Results Checker PIN and access your results instantly
          and securely.
        </p>

        {/* Purchase Form and Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Purchase Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Purchase Checker PIN</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Network Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Network
                  </label>
                  <select 
                    name="network"
                    value={formData.network}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Network</option>
                    {networks.map((network, index) => (
                      <option key={index} value={network}>{network}</option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <select 
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num} PIN{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Price Display */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Amount:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      GHS {(formData.quantity * 15).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">* GHS 5.00 per PIN</p>
                </div>

                {/* Buy Now Button */}
                <Link to='/voucher'>
                    <button 
                  type="submit"
                  className="w-full bg-purple-700 text-white font-semibold text-lg py-3 rounded-lg hover:bg-purple-800 transition duration-300 cursor-pointer"
                >
                  Buy Now - GHS {(formData.quantity * 15).toFixed(2)}
                </button>
                </Link>
              </form>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img 
                src={assets.transaction} 
                alt="Mobile Transaction" 
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Enter Details</h4>
                <p className="text-gray-600">Provide your phone number and select network</p>
              </div>
              <div className="p-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Make Payment</h4>
                <p className="text-gray-600">Complete payment via mobile money</p>
              </div>
              <div className="p-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Receive PIN</h4>
                <p className="text-gray-600">Get your PIN instantly via SMS</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BuyCheckerPage;