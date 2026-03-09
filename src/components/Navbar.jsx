import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { gymConfig } from '../config'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showPlanDialog, setShowPlanDialog] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handlePlanSelect = (plan) => {
    const message = `Hi, I'm interested in the ${plan.name} plan (Rs. ${plan.price}/month). Please provide more details.`
    window.open(`https://wa.me/${gymConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
    setShowPlanDialog(false)
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-black/95 backdrop-blur-sm' : 'bg-primary-black/90'}`}>
        <div className="border-b border-primary-yellow/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="text-3xl font-display font-bold tracking-wider">
                <span className="text-primary-yellow">{gymConfig.gymName}</span>
              </div>

              <div className="hidden md:flex space-x-8 font-bold">
                <a href="#features" className="hover:text-primary-yellow transition-colors border-b-2 border-transparent hover:border-primary-yellow pb-1">FEATURES</a>
                <a href="#community" className="hover:text-primary-yellow transition-colors border-b-2 border-transparent hover:border-primary-yellow pb-1">COMMUNITY</a>
                <a href="#pricing" className="hover:text-primary-yellow transition-colors border-b-2 border-transparent hover:border-primary-yellow pb-1">PRICING</a>
                <a href="#testimonials" className="hover:text-primary-yellow transition-colors border-b-2 border-transparent hover:border-primary-yellow pb-1">REVIEWS</a>
                <a href="#contact" className="hover:text-primary-yellow transition-colors border-b-2 border-transparent hover:border-primary-yellow pb-1">CONTACT</a>
              </div>

              <button 
                onClick={() => setShowPlanDialog(true)}
                className="hidden md:block bg-primary-yellow text-primary-black px-8 py-3 font-bold hover:bg-red-600 hover:text-white transition-all"
              >
                JOIN NOW
              </button>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-primary-yellow">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

            {isOpen && (
              <div className="md:hidden mt-6 pb-4 space-y-4 font-bold bg-primary-black/95 backdrop-blur-sm -mx-4 px-4 border-t border-primary-yellow/30 pt-4">
                <a href="#features" onClick={() => setIsOpen(false)} className="block hover:text-primary-yellow transition py-2">FEATURES</a>
                <a href="#community" onClick={() => setIsOpen(false)} className="block hover:text-primary-yellow transition py-2">COMMUNITY</a>
                <a href="#pricing" onClick={() => setIsOpen(false)} className="block hover:text-primary-yellow transition py-2">PRICING</a>
                <a href="#testimonials" onClick={() => setIsOpen(false)} className="block hover:text-primary-yellow transition py-2">REVIEWS</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-primary-yellow transition py-2">CONTACT</a>
                <button 
                  onClick={() => {
                    setIsOpen(false)
                    setShowPlanDialog(true)
                  }}
                  className="w-full bg-primary-yellow text-primary-black px-8 py-3 font-bold mt-2"
                >
                  JOIN NOW
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Plan Selection Dialog */}
      {showPlanDialog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-primary-darkGray border-2 border-primary-yellow max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 lg:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-yellow">
                SELECT YOUR PLAN
              </h2>
              <button 
                onClick={() => setShowPlanDialog(false)}
                className="text-primary-yellow hover:text-white transition"
              >
                <X size={32} />
              </button>
            </div>

            <p className="text-gray-300 mb-8 text-lg">
              Choose a membership plan and we'll connect you on WhatsApp
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gymConfig.pricing.map((plan, index) => (
                <div 
                  key={index}
                  onClick={() => handlePlanSelect(plan)}
                  className={`cursor-pointer bg-primary-black p-6 border-2 ${plan.popular ? 'border-primary-yellow' : 'border-gray-700'} hover:border-primary-yellow transition-all transform hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="bg-primary-yellow text-primary-black px-3 py-1 text-xs font-bold mb-4 inline-block">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-display font-bold text-primary-yellow mb-3">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-display font-bold text-white">
                      Rs. {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-primary-yellow">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center text-primary-yellow font-bold">
                    SELECT THIS PLAN →
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
