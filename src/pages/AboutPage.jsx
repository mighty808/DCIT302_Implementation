import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 ">
        {/* Hero Section */}
        <div className="bg-purple-600 text-white py-26">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About West African Examinations Council</h1>
            <p className="text-xl">Promoting Excellence in Education Since 1952</p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a world-class examining body, adding value to the educational goals of its stakeholders.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To remain Africa's foremost examining body, providing qualitative and reliable educational assessment,
                encouraging academic and moral excellence, and promoting sustainable human resource development and international cooperation.
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our History</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The West African Examinations Council (WAEC) was established in 1952 after the governments of Ghana, Nigeria, Sierra Leone, 
                  and The Gambia enacted the West African Examinations Council Ordinances in 1951.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Liberia became the fifth member country in 1974. The Council's headquarters is in Accra, Ghana, and it operates 
                  national offices in each member country.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  For over 70 years, WAEC has been conducting various examinations in the English-speaking West African countries,
                  contributing significantly to educational development in the sub-region.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Milestones</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1952</span>
                    <span className="text-gray-600">WAEC established with four member countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1974</span>
                    <span className="text-gray-600">Liberia joins as fifth member country</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1985</span>
                    <span className="text-gray-600">Introduction of computerized result processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2000</span>
                    <span className="text-gray-600">Launch of online results checking system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Maintaining the highest standards of honesty and ethical conduct in all our operations.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest quality in examination administration and service delivery.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professionalism</h3>
              <p className="text-gray-600">Demonstrating competence, efficiency, and commitment in all endeavors.</p>
            </div>
          </div>
        </div>

        {/* Member Countries */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Member Countries</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-blue-600">🇬🇭</span>
                <h3 className="font-semibold text-gray-900 mt-2">Ghana</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-green-600">🇳🇬</span>
                <h3 className="font-semibold text-gray-900 mt-2">Nigeria</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-red-600">🇸🇱</span>
                <h3 className="font-semibold text-gray-900 mt-2">Sierra Leone</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-yellow-600">🇬🇲</span>
                <h3 className="font-semibold text-gray-900 mt-2">The Gambia</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-2xl font-bold text-blue-600">🇱🇷</span>
                <h3 className="font-semibold text-gray-900 mt-2">Liberia</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Headquarters</h3>
              <p className="text-gray-600">
                WAEC Headquarters<br />
                Accra, Ghana<br />
                P.O. Box GP 125<br />
                Accra, Ghana
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600">
                Phone: +233 302 248 967<br />
                Email: info@waecgh.org<br />
                Website: waecgh.org
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage