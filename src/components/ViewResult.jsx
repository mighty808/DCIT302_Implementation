import React, { useRef } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Link } from 'react-router-dom'

const ViewResults = () => {
  const resultsData = {
    indexNumber: '0021304029',
    candidateName: 'AGVEI YEBOAH SAMUEL',
    examinationType: 'MAY/JUNE WASSCE, 2014',
    examinationCentre: 'ST. STEPHENS DAY SNR. HIGH/TECH. SCH.',
    cardUse: '0 of 3',
    subjects: [
      { name: 'SOCIAL STUDIES', grade: 'A1', remark: 'EXCELLENT' },
      { name: 'ENGLISH LANG', grade: 'B2', remark: 'VERY GOOD' },
      { name: 'MATHEMATICS(CORE)', grade: 'B3', remark: 'GOOD' },
      { name: 'INTEGRATED SCIENCE', grade: 'B2', remark: 'VERY GOOD' },
      { name: 'BIOLOGY', grade: 'A1', remark: 'EXCELLENT' },
      { name: 'FOODS & NUTRITION', grade: 'B3', remark: 'GOOD' },
      { name: 'MGT IN LIVING', grade: 'B2', remark: 'VERY GOOD' },
      { name: 'GEN KNOW IN ART', grade: 'A1', remark: 'EXCELLENT' }
    ]
  }

  const pdfRef = useRef()

  const downloadPDF = () => {
    const input = pdfRef.current
    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`WAEC_Results_${resultsData.indexNumber}.pdf`)
    })
  }

  const handlePrint = () => {
    const originalContents = document.body.innerHTML
    const printContents = pdfRef.current.innerHTML
    
    document.body.innerHTML = printContents
    window.print()
    document.body.innerHTML = originalContents
    window.location.reload()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Printable content with PDF ref - Excludes navbar */}
          <div ref={pdfRef} className="bg-white rounded-lg shadow-lg p-8 mb-8 print:shadow-none print:border">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                WASSCEDIRECT ONLINE INFORMATION SERVICE – RESULTS
              </h1>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 print:bg-white print:border-l-2">
                <p className="text-sm text-red-700 font-medium print:text-black">
                  Disclaimer: THE RESULTS GIVEN BELOW ARE PROVISIONAL. THE FINAL RESULTS ARE THOSE 
                  WHICH WILL BE PRINTED ON YOUR CERTIFICATE
                </p>
              </div>
            </div>

            {/* Candidate Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Index Number:
                </label>
                <p className="text-lg font-semibold text-gray-900">{resultsData.indexNumber}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Candidate Name:
                </label>
                <p className="text-lg font-semibold text-gray-900">{resultsData.candidateName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Examination:
                </label>
                <p className="text-lg font-semibold text-gray-900">{resultsData.examinationType}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Examination Centre:
                </label>
                <p className="text-lg font-semibold text-gray-900">{resultsData.examinationCentre}</p>
              </div>
            </div>

            {/* Card Details */}
            <div className="bg-blue-50 rounded-lg p-4 mb-8 print:bg-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Card Details</span>
                <span className="text-sm font-semibold text-blue-700 print:text-black">
                  Card use: {resultsData.cardUse}
                </span>
              </div>
            </div>

            {/* Subjects and Grades Table */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Examination Results</h3>
              <table className="w-full">
                <tbody>
                  {resultsData.subjects.map((subject, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 text-lg font-medium text-gray-800 w-2/3">
                        {subject.name}
                      </td>
                      <td className="py-3 w-16 text-center">
                        <span className="text-lg font-bold text-blue-600 print:text-black">
                          {subject.grade}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-lg font-semibold text-gray-700">
                           {subject.remark}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer for PDF */}
            <div className="text-center text-gray-600 mt-8 pt-8 border-t border-gray-300">
              <p className="mb-2">Call now: +91 9591776078</p>
              <p>Accra, Ghana</p>
              <p className="text-sm text-gray-500 mt-4">Generated on: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-8 print:hidden">
            <button 
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            >
              Download PDF
            </button>
            <button 
              onClick={handlePrint}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
            >
              Print Results
            </button>
            <Link to='/check-results'>
                  <button className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300 font-semibold cursor-pointer">
              Check Another Result
            </button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ViewResults