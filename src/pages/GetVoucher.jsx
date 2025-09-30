import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const GetVoucher = () => {
  const [voucherNumber, setVoucherNumber] = useState('')
  const [voucherPin, setVoucherPin] = useState('')
  const [copiedField, setCopiedField] = useState('')

  const generateVoucher = () => {
    // Generate 12-digit voucher number
    const newVoucherNumber = Array.from({length: 12}, () => 
      Math.floor(Math.random() * 10)
    ).join('')
    
    // Generate 8-digit voucher PIN
    const newVoucherPin = Array.from({length: 8}, () => 
      Math.floor(Math.random() * 10)
    ).join('')

    setVoucherNumber(newVoucherNumber)
    setVoucherPin(newVoucherPin)
    setCopiedField('')
  }

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(''), 2000)
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="text-center mb-12 p-20 bg-purple-600 mt-20">
          <h1 className="text-4xl font-bold mb-4 text-white">Buy Checker</h1>
          <p className="text-lg max-w-2xl mx-auto text-white">
            Secure your WAEC Results Checker PIN and access your results instantly and securely.
          </p>
        </div>

        {/* Voucher Details */}
        <div className="max-w-2xl mx-auto px-4 py-8">
          <p className="text-center text-xl text-gray-600 mb-8">
            Secure your WAEC Results Checker PIN and access your results instantly and securely.
          </p>

          {/* Voucher Display */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <button 
                onClick={generateVoucher}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300 font-semibold text-lg"
              >
                Generate Voucher
              </button>
            </div>

            {voucherNumber && (
              <div className="space-y-6">
                {/* Voucher Number */}
                <div className="bg-gray-50 rounded-lg p-6 relative">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Voucher Number</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900 tracking-wider">
                      {voucherNumber.match(/.{1,4}/g)?.join(' ')}
                    </p>
                    <button 
                      onClick={() => copyToClipboard(voucherNumber, 'number')}
                      className="cursor-pointer ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  {copiedField === 'number' && (
                    <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Copied!
                    </div>
                  )}
                </div>

                {/* Voucher PIN */}
                <div className="bg-gray-50 rounded-lg p-6 relative">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Voucher PIN</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900 tracking-wider">
                      {voucherPin.match(/.{1,4}/g)?.join(' ') }
                    </p>
                    <button 
                      onClick={() => copyToClipboard(voucherPin, 'pin')}
                      className="cursor-pointer ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition duration-300 flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  {copiedField === 'pin' && (
                    <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Copied!
                    </div>
                  )}
                </div>

                {/* Important Notice */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> Save this voucher information securely. You will need both the Voucher Number and PIN to check your results.
                  </p>
                </div>

                {/* Check Results Button */}
                <div className="text-center">
                  <Link to="/check-results">
                    <button className="cursor-pointer bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-800 transition duration-300 font-semibold text-lg">
                      Check Results
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {!voucherNumber && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">
                  Click "Generate Voucher" to create your WAEC Results Checker PIN
                </p>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How to Use Your Voucher</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click "Generate Voucher" to create your unique voucher</li>
              <li>Save both the Voucher Number and PIN securely using the copy buttons</li>
              <li>Go to "Check Results" page</li>
              <li>Enter your examination details and paste the voucher information</li>
              <li>Click "Submit" to view your results</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default GetVoucher