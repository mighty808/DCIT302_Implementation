import React from 'react'
import { assets } from '../assets/assets' // Make sure your Buy Checker image is here
import { Link } from 'react-router-dom'

const BuyChecker = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Buy Checker
      </h2>
      <p className="text-lg text-gray-600 mb-10">
        Secure your WAEC Results Checker PIN and access your results instantly and securely.
      </p>

      {/* Illustration */}
      <div className="flex justify-center mb-10">
        <img
          src={assets.transaction} // replace with your 3D phone illustration
          alt="Buy Checker"
          className="w-90 h-auto"
        />
      </div>

      {/* CTA Button */}
      <Link to="/buycheckerpage">
        <button className="bg-purple-700 text-white font-semibold text-lg px-10 py-3 rounded-lg hover:bg-purple-800 transition">
        Buy Now
      </button> 
      </Link>
    </div>
  )
}

export default BuyChecker
