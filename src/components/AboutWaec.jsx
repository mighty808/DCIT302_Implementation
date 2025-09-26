import React from 'react'
import { assets } from '../assets/assets' // Make sure your WAEC building image is here

const AboutWAEC = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-16 mt-30 mb-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About WAEC
          </h2>

          {/* Vision */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
            <p className="text-gray-600">
              To be a world-class examining body supporting the educational goals of West Africa.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
            <p className="text-gray-600">
              To deliver reliable assessments, foster academic and moral excellence, and promote regional development through quality education.
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            WAEC is committed to delivering fair, credible, and internationally respected assessments that support the educational aspirations of students across West Africa. With decades of experience, we serve as a cornerstone in shaping academic excellence and regional development.
          </p>
        </div>

        {/* Right Column - Image */}
        <div>
          <img
            src={assets.waecbuilding} // Replace with your actual building image
            alt="WAEC Building"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutWAEC
