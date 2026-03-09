import React from 'react'
import { Award, Dumbbell, Clock, TrendingUp } from 'lucide-react'
import { gymConfig } from '../config'

const iconMap = [Award, Dumbbell, Clock, TrendingUp]

const Features = () => {
  return (
    <section id="features" className="py-12 lg:py-16 bg-primary-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            WHY <span className="text-primary-yellow">CHOOSE US</span>
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-primary-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {gymConfig.features.map((feature, index) => {
            const Icon = iconMap[index]
            return (
              <div key={index} className="group bg-primary-darkGray/90 p-6 hover:bg-primary-yellow hover:text-primary-black transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-primary-yellow group-hover:bg-primary-black w-12 h-12 flex items-center justify-center mb-4 transition-colors">
                  <Icon size={24} className="text-primary-black group-hover:text-primary-yellow transition-colors" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 uppercase">{feature.title}</h3>
                <p className="text-gray-400 group-hover:text-primary-black text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Gym Image with Content Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative overflow-hidden">
            <img 
              src="/Assets/gym-image.jpg" 
              alt="Gym City Abbottabad Interior" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent pointer-events-none"></div>
          </div>

          <div>
            <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              STATE-OF-THE-ART <span className="text-primary-yellow">FACILITY</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Experience training in Abbottabad's most advanced fitness facility. Our gym features premium equipment, spacious workout areas, and a motivating atmosphere designed to help you achieve your goals.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-primary-yellow w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-black font-bold">✓</span>
                </div>
                <span className="text-gray-300">Modern cardio and strength equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-yellow w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-black font-bold">✓</span>
                </div>
                <span className="text-gray-300">Clean and well-maintained facility</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary-yellow w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-black font-bold">✓</span>
                </div>
                <span className="text-gray-300">Spacious workout areas for all fitness levels</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
