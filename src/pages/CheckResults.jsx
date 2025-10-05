import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CheckResults = () => {
  const [formData, setFormData] = useState({
    indexNumber: '',
    examType: '',
    examYear: '',
    dateOfBirth: '',
    voucherSerial: '',
    confirmPin: ''
  })

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // 1: Basic info, 2: Security info

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDateChange = (e) => {
    const date = new Date(e.target.value)
    const formattedDate = formatDate(date)
    setFormData(prev => ({
      ...prev,
      dateOfBirth: formattedDate
    }))
    setShowDatePicker(false)
  }

  const formatDate = (date) => {
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    
    const getOrdinalSuffix = (day) => {
      if (day > 3 && day < 21) return 'th'
      switch (day % 10) {
        case 1: return 'st'
        case 2: return 'nd'
        case 3: return 'rd'
        default: return 'th'
      }
    }

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`
  }

  const handleClear = () => {
    setFormData({
      indexNumber: '',
      examType: '',
      examYear: '',
      dateOfBirth: '',
      voucherSerial: '',
      confirmPin: ''
    })
    setCurrentStep(1)
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (currentStep === 1) {
      setCurrentStep(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentStep === 2) {
      // Handle final form submission logic here
      console.log('Form submitted:', formData)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
  }

  const currentYear = new Date().getFullYear()

  return (
    <> 
      <Navbar />

      {/* Page Header */}
      <div className="text-center mb-12 bg-purple-600 mt-20 p-20">
        <h1 className="text-6xl font-bold mb-4 text-white">Check Result</h1>
        <p className="text-lg text-white">Enter your examination information</p>
      </div>
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  1
                </div>
                <div className={`ml-2 ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>Basic Information</div>
              </div>
              <div className="w-20 h-1 mx-4 bg-gray-300 mt-5"></div>
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  2
                </div>
                <div className={`ml-2 ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>Security Information</div>
              </div>
            </div>

            {/* Checker Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <form onSubmit={currentStep === 1 ? handleNext : handleSubmit}>
                
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <>
                    {/* Index Number and Exam Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Index Number
                        </label>
                        <input
                          type="text"
                          name="indexNumber"
                          value={formData.indexNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your index number"
                          // required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Examination Type
                        </label>
                        <select
                          name="examType"
                          value={formData.examType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          // required
                        >
                          <option value="">Select Your Exams Type</option>
                          <option value="WASSCE">WASSCE</option>
                          <option value="BECE">BECE</option>
                          <option value="WASSCE_PRIVATE">WASSCE (PRIVATE)</option>
                          <option value="BECE_SCHOOL">BECE (SCHOOL)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date of Birth Notice */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <p className="text-sm text-yellow-700">
                        Enter Date Of Birth (WASSCE (PRIVATE) and BECE (SCHOOL) results only!)
                      </p>
                    </div>

                    {/* Exam Year and Date of Birth */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Examination Year
                        </label>
                        <input
                          type="number"
                          name="examYear"
                          value={formData.examYear}
                          onChange={handleInputChange}
                          min="1980"
                          max={currentYear + 1}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter year (e.g., 2025)"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Enter any year from 1980 to {currentYear + 1}
                        </p>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date Of Birth
                        </label>
                        <input
                          type="text"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          onFocus={() => setShowDatePicker(true)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Select your date of birth"
                          readOnly
                        />
                        {showDatePicker && (
                          <div className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                            <input
                              type="date"
                              onChange={handleDateChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded"
                              max={new Date().toISOString().split('T')[0]}
                            />
                            <button
                              type="button"
                              onClick={() => setShowDatePicker(false)}
                              className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                              Set Date
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2: Security Information */}
                {currentStep === 2 && (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enter The Security Information</h2>
                      
                      {/* Voucher Serial Number */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Voucher Serial Number
                        </label>
                        <input
                          type="text"
                          name="voucherSerial"
                          value={formData.voucherSerial}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="00000000000"
                          required
                        />
                      </div>

                      <hr className="border-gray-300 my-6" />

                      {/* Confirm Examination Information */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Your Examination Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Index Number
                            </label>
                            <input
                              type="text"
                              value={formData.indexNumber}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                              readOnly
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Confirm PIN
                            </label>
                            <input
                              type="password"
                              name="confirmPin"
                              value={formData.confirmPin}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="0000000"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 font-semibold"
                  >
                    Clear Details
                  </button>
                  
                  {currentStep === 1 ? (
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
                    >
                      Next
                    </button>
                  ) : (
                    <div className="flex space-x-4 flex-1">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300 font-semibold"
                      >
                        Back
                      </button>
                      <Link to='/view-results'>
                        <button
                        type="submit"
                        className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
                      >
                        Submit
                      </button>
                      </Link>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* Instructions Section */}
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">USING THE RESULT CHECKER VOUCHER</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Enter your Index Number.</li>
                <li>Select the Type of Examination (e.g. WASSCE).</li>
                <li>Select your Examination Year eg. 2003.</li>
                <li>Enter the Serial Number found on the Voucher.</li>
                <li>Enter the 12-digit Personal Identification Number (PIN) on your Voucher eg. 012345678912.</li>
                <li>Confirm your Index Number and Examination Year ensure that your examination information is correct</li>
                <li>Click on Submit and wait for the display in the popup window</li>
              </ol>
              <p className="text-gray-600 mt-4 italic">This may take several minutes</p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CheckResults