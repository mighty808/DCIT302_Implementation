import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="pt-16 flex items-center justify-center mt-10">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-[85vw]">
        {/* Background Image */}
        <img
          src={assets.wasscePicture}
          alt="WASSCE Background"
          className="absolute inset-0 h-full w-full object-cover rounded-3xl"
        />

        {/* Dark Overlay + Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-xl lg:text-8xl font-bold mb-4">
              WASSCE
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Results Checker
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
