import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition duration-300">About WAEC</a></li>
              <li><a href="/exams" className="hover:text-blue-400 transition duration-300">Exams</a></li>
              <li><a href="/buy-checker" className="hover:text-blue-400 transition duration-300">Buy Checker</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition duration-300">Services</a></li>
            </ul>
          </div>

          {/* Vision Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vision</h3>
            <p className="text-gray-300">
              To be a world-class examining body preparing the educational goods of West Africa.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Accra, Ghana</p>
              <p>Call now: +91 9561776078</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-white">
            © 2025 West African Examination Council - Circular Portal. Copyright Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer