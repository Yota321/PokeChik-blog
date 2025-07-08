import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react'

// Import all magazine pages
import page01 from '../assets/pokemon/magazine_page_01.png'
import page02 from '../assets/pokemon/magazine_page_02.png'
import page03 from '../assets/pokemon/magazine_page_03.png'
import page04 from '../assets/pokemon/magazine_page_04.png'
import page05 from '../assets/pokemon/magazine_page_05.png'
import page06 from '../assets/pokemon/magazine_page_06.png'
import page07 from '../assets/pokemon/magazine_page_07.png'
import page08 from '../assets/pokemon/magazine_page_08.png'
import page09 from '../assets/pokemon/magazine_page_09.png'
import page10 from '../assets/pokemon/magazine_page_10.png'
import page11 from '../assets/pokemon/magazine_page_11.png'
import page12 from '../assets/pokemon/magazine_page_12.png'
import page13 from '../assets/pokemon/magazine_page_13.png'
import page14 from '../assets/pokemon/magazine_page_14.png'
import page15 from '../assets/pokemon/magazine_page_15.png'
import page16 from '../assets/pokemon/magazine_page_16.png'
import page17 from '../assets/pokemon/magazine_page_17.png'
import page18 from '../assets/pokemon/magazine_page_18.png'
import page19 from '../assets/pokemon/magazine_page_19.png'
import page20 from '../assets/pokemon/magazine_page_20.png'
import page21 from '../assets/pokemon/magazine_page_21.png'
import page22 from '../assets/pokemon/magazine_page_22.png'
import page23 from '../assets/pokemon/magazine_page_23.png'
import page24 from '../assets/pokemon/magazine_page_24.png'

const magazinePages = [
  page01, page02, page03, page04, page05, page06,
  page07, page08, page09, page10, page11, page12,
  page13, page14, page15, page16, page17, page18,
  page19, page20, page21, page22, page23, page24
]

export default function MagazineViewer({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % magazinePages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + magazinePages.length) % magazinePages.length)
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-xl font-bold">Pokémon Magazine</h2>
              <span className="text-sm opacity-80">
                Page {currentPage + 1} of {magazinePages.length}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Magazine Page Display */}
          <div className="relative bg-gray-100 flex items-center justify-center min-h-[500px]">
            <motion.img
              key={currentPage}
              src={magazinePages[currentPage]}
              alt={`Magazine page ${currentPage + 1}`}
              className="max-w-full max-h-[60vh] object-contain shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextPage}
              disabled={currentPage === magazinePages.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Page Navigation */}
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="text-sm text-gray-600">
                Page {currentPage + 1} of {magazinePages.length}
              </div>

              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage === magazinePages.length - 1}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Page Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {magazinePages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`flex-shrink-0 w-12 h-16 rounded border-2 overflow-hidden transition-all ${
                    currentPage === index
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={page}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

