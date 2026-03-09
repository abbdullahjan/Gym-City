import React from 'react'
import { Star, Quote } from 'lucide-react'
import { gymConfig } from '../config'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-primary-darkGray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 215, 0, 0.1) 10px, rgba(255, 215, 0, 0.1) 20px)`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            MEMBER <span className="text-primary-yellow">REVIEWS</span>
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-primary-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-sm md:max-w-none mx-auto">
          {gymConfig.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-black/80 p-6 hover:bg-primary-darkGray hover:transform hover:-translate-y-2 transition-all duration-300">
              <Quote size={32} className="text-primary-yellow mb-3" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary-yellow text-primary-yellow" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed italic text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-primary-yellow/30 pt-3">
                <div className="font-bold text-lg text-primary-yellow">{testimonial.name}</div>
                <div className="text-gray-400 text-xs uppercase tracking-wider">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Width Bodybuilder Image */}
        <div className="mt-10 lg:mt-12">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop" 
            alt="Athlete Posing" 
            className="w-full h-64 lg:h-80 object-cover grayscale"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
