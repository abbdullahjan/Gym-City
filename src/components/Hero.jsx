import React from 'react'
import { ArrowRight, Zap } from 'lucide-react'
import { gymConfig } from '../config'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-primary-black"></div>

      {/* Desktop Hero Image - Right Side */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-3/5">
        <div className="relative h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop" 
            alt="Athlete" 
            className="h-[120%] w-full object-cover grayscale opacity-80 -translate-y-[15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/70 to-transparent"></div>
        </div>
      </div>

      {/* Mobile Hero Image - Full Background */}
      <div className="lg:hidden absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop" 
          alt="Athlete" 
          className="h-full w-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-black/60 via-primary-black/80 to-primary-black"></div>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-3xl lg:max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-primary-yellow text-primary-black px-4 py-2 font-bold text-xs lg:text-sm mb-6 lg:mb-8">
            <Zap size={16} className="lg:w-[18px] lg:h-[18px]" fill="currentColor" />
            <span>{gymConfig.tagline}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-5 lg:mb-6 leading-tight lg:leading-none">
            {gymConfig.hero.title}
            <br />
            <span className="text-primary-yellow">
              {gymConfig.hero.highlight}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 lg:mb-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {gymConfig.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 items-stretch sm:items-start justify-center lg:justify-start mb-12 lg:mb-20">
            <a href={gymConfig.hero.ctaLink} className="group bg-primary-yellow text-primary-black px-8 lg:px-10 py-4 font-bold text-base lg:text-lg hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2">
              {gymConfig.hero.ctaText}
              <ArrowRight size={20} className="lg:w-[22px] lg:h-[22px] group-hover:translate-x-2 transition-transform" />
            </a>
            <button className="bg-transparent text-white px-8 lg:px-10 py-4 font-bold text-base lg:text-lg hover:bg-white/10 transition-all border border-white/30">
              WATCH TOUR
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:gap-5 max-w-2xl lg:max-w-4xl mx-auto lg:mx-0">
          {gymConfig.stats.map((stat, index) => (
            <div key={index} className="bg-primary-darkGray/90 backdrop-blur-sm p-4 lg:p-5 text-center border-l-2 lg:border-l-4 border-primary-yellow">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-yellow mb-1 lg:mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 uppercase text-[10px] lg:text-xs font-bold tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
