import React from 'react'
import { Check } from 'lucide-react'
import { gymConfig } from '../config'

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 lg:py-16 bg-primary-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover grayscale opacity-10"
        />
        <div className="absolute inset-0 bg-primary-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            CHOOSE YOUR <span className="text-primary-yellow">PLAN</span>
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-primary-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-sm md:max-w-none mx-auto">
          {gymConfig.pricing.map((plan, index) => (
            <div key={index} className={`relative bg-primary-darkGray/90 pkr{plan.popular ? 'ring-2 ring-primary-yellow scale-105' : ''} p-6 transition-all duration-300 hover:ring-2 hover:ring-primary-yellow transform hover:-translate-y-2`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-yellow text-primary-black px-4 py-1 font-bold text-xs">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl lg:text-2xl font-display font-bold mb-3 lg:mb-3 text-primary-yellow">{plan.name}</h3>
              <div className="mb-5 lg:mb-6">
                <span className="text-4xl lg:text-5xl font-display font-bold text-white">pkr{plan.price}</span>
                <span className="text-gray-400 text-base lg:text-lg">/{plan.period}</span>
              </div>

              <ul className="space-y-2.5 lg:space-y-3 mb-5 lg:mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="bg-primary-yellow p-1 mt-0.5">
                      <Check size={14} className="text-primary-black" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  const message = `Hi, I'm interested in the pkr{plan.name} plan (Rs. pkr{plan.price}/month). Please provide more details.`
                  window.open(`https://wa.me/pkr{gymConfig.whatsapp}?text=pkr{encodeURIComponent(message)}`, '_blank')
                }}
                className={`w-full py-3 font-bold transition-all pkr{plan.popular ? 'bg-primary-yellow text-primary-black hover:bg-red-600 hover:text-white' : 'bg-gray-700 text-white hover:bg-primary-yellow hover:text-primary-black'}`}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>

        {/* Full Width Bodybuilder Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10 lg:mt-12">
          <img 
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop" 
            alt="Strength Training" 
            className="w-full h-64 lg:h-80 object-cover grayscale"
          />
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" 
            alt="Bodybuilder" 
            className="w-full h-64 lg:h-80 object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}

export default Pricing
