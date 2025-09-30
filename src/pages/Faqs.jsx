import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Faqs = () => {
  const faqs = [
    {
      question: "How do I check my WASSCE results online?",
      answer: "To check your WASSCE results, visit the official website, enter your index number, select the exam year, choose the type of exam (e.g., WASSCE), and input your serial number and PIN from your result checker card. Then click 'Submit' to view your results."
    },
    {
      question: "Where can I buy a WAEC result checker card?",
      answer: "You can purchase a result checker card at most internet cafés, WAEC-approved vendors, or via mobile money services. Make sure the card is valid and unused before entering the details."
    },
    {
      question: "What should I do if my result is not showing?",
      answer: "Double-check that all details—especially your index number and PIN—are entered correctly. If the issue persists, wait a few hours and try again, or contact WAEC support via the help section on the website."
    },
    {
      question: "Can I check my results using a mobile phone?",
      answer: "Yes, the website is mobile-friendly. You can easily check your results using any smartphone with internet access. No additional app is required."
    },
    {
      question: "Is there a limit to how many times I can use the result checker card?",
      answer: "Yes, a result checker card typically allows you to check a result up to 5 times for the same exam year. Once the limit is reached, you'll need to purchase a new card."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
          <div className="text-center mb-12 p-20 bg-purple-600 mt-20">
            <h1 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h1>
            <p className="text-lg max-w-2xl mx-auto text-white">
              Secure your WAEC Results Checker PIN and access your results instantly and securely.
            </p>
          </div>
      
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {index + 1}. {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-4">
              If you have more questions or need further assistance, don't hesitate to contact our support team.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Contact Support
              </button>
              <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Faqs