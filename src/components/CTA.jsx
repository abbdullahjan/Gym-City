import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { gymConfig } from '../config'

const CTA = () => {
  return (
    <section className="py-12 lg:py-16 bg-primary-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop" 
          alt="Training" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/90 to-primary-black"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-2 bg-primary-yellow"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-primary-yellow"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-yellow text-primary-black px-4 py-1 font-bold text-xs mb-6">
          <Zap size={16} fill="currentColor" />
          <span>LIMITED TIME OFFER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          START YOUR <span className="text-primary-yellow">TRANSFORMATION</span>
        </h2>
        
        <p className="text-base lg:text-lg text-gray-300 mb-8">
          Join today and get your first month at 50% off. No commitment. Cancel anytime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={() => {
              const message = "Hi, I'm interested in joining Gym City Abbottabad. Please provide more details about membership."
              window.open(`https://wa.me/${gymConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
            }}
            className="group bg-primary-yellow text-primary-black px-8 lg:px-10 py-3 font-bold hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            CONTACT US ON WHATSAPP
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <a 
            href={`tel:${gymConfig.phone}`}
            className="bg-transparent text-white px-8 lg:px-10 py-3 font-bold hover:bg-white/10 transition-all text-center"
          >
            CALL NOW
          </a>
        </div>

        <p className="text-gray-500 text-xs mt-6">
          * Offer valid for new members only. Terms and conditions apply.
        </p>
      </div>
    </section>
  )
}

export default CTA
