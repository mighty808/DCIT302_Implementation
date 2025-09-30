import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-50">
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="https://waecgh.org/timetable/#" target='_blank' className="hover:text-blue-400 transition duration-300">Exams</a></li>
              <li><a href="/voucher" className="hover:text-blue-400 transition duration-300">Voucher</a></li>
              <li><a href="/faqs" className="hover:text-blue-400 transition duration-300">Faqs</a></li>
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
              <p>Head Office - Examination Loop Behind Ridge Hospital</p>
              <p>P. O. Box 917, Accra</p>
              <p>Call now: +233 302 208201-9</p>
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