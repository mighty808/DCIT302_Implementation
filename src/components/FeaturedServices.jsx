import React from 'react'

const FeaturedServices = () => {
  const featuredServices = [
    {
      title: "Online Results Checker",
      access: "INSTANT ACCESS",
      accessColor: "text-green-600",
      company: "WAEC Ghana",
      buttonText: "Check Results",
      examination: "West African Secondary School Certificate Examination",
      location: "Accra, Ghana",
    },
    {
      title: "School Placement",
      access: "INSTANT ACCESS",
      accessColor: "text-green-600",
      company: "WAEC Ghana",
      buttonText: "Apply now",
      examination: "West African Examination Council",
      location: "Accra, Ghana",
    },
    {
      title: "Results Verification",
      access: "VERIFICATION",
      accessColor: "text-green-600",
      company: "WAEC Ghana",
      buttonText: "View details",
      examination: "West African Examination Council",
      location: "Accra, Ghana",
    }
  ]

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12 mt-15">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h3 className="text-5xl font-bold text-gray-900 mb-2">
          Featured WAEC Services
        </h3>
        <p className="text-lg text-gray-600">
          Explore trusted WAEC tools and services for students, parents, and schools.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredServices.map((service, index) => (
          <div 
            key={index}
            className="bg-purple-100  rounded-2xl shadow p-6 flex flex-col justify-between"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <span className={`text-sm font-semibold ${service.accessColor}`}>
                  {service.access}
                </span>
              </div>
              {/* Placeholder for bookmark or icon */}
              <div className="w-5 h-5 border rounded-sm" />
            </div>

            {/* Middle Section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {/* Placeholder for WAEC logo */}
                <span className="text-xs">Logo</span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">{service.examination}</p>
                <p className="text-gray-500 text-sm">{service.location}</p>
              </div>
            </div>

            {/* Company */}
            <p className="text-sm text-gray-500 mb-4">{service.company}</p>

            {/* Button */}
            <button className="mt-auto w-full bg-white border border-purple-600 text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedServices
