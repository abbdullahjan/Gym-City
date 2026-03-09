import React from 'react'

const Team = () => {
  const members = [
    {
      image: "/Assets/person1.jpg",
    },
    {
      image: "/Assets/person2.jpg",
    },
    {
      image: "/Assets/person3.jpg",
    }
  ]

  return (
    <section id="community" className="py-12 lg:py-16 bg-primary-darkGray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            OUR <span className="text-primary-yellow">COMMUNITY</span>
          </h2>
          <div className="w-20 lg:w-24 h-1 bg-primary-yellow mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Real members, real transformations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member, index) => (
            <div key={index} className="group relative overflow-hidden bg-primary-black">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={`Gym City Member ${index + 1}`}
                  className="w-full h-80 lg:h-96 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black via-primary-black/40 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-300 text-lg">
            Join our growing community of fitness enthusiasts at Gym City Abbottabad
          </p>
        </div>
      </div>
    </section>
  )
}

export default Team
