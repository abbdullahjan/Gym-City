import React from 'react'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { gymConfig } from '../config'

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary-black border-t border-primary-yellow/30 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-3xl font-display font-bold mb-4 text-primary-yellow">
              {gymConfig.gymName}
            </div>
            <p className="text-gray-400">{gymConfig.description}</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-yellow uppercase">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-primary-yellow transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-yellow transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-primary-yellow transition">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary-yellow transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-yellow uppercase">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary-yellow" />
                <a href={`tel:${gymConfig.phone}`} className="hover:text-primary-yellow transition">
                  {gymConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary-yellow" />
                <a href={`mailto:${gymConfig.email}`} className="hover:text-primary-yellow transition">
                  {gymConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary-yellow mt-1" />
                <a href={gymConfig.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary-yellow transition">
                  {gymConfig.address}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-primary-yellow uppercase">Follow Us</h4>
            <div className="flex gap-4">
              <a href={gymConfig.social.instagram} className="bg-primary-darkGray p-3 hover:bg-primary-yellow hover:text-primary-black transition">
                <Instagram size={20} />
              </a>
              <a href={gymConfig.social.facebook} className="bg-primary-darkGray p-3 hover:bg-primary-yellow hover:text-primary-black transition">
                <Facebook size={20} />
              </a>
              <a href={gymConfig.social.twitter} className="bg-primary-darkGray p-3 hover:bg-primary-yellow hover:text-primary-black transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-yellow/30 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {gymConfig.gymName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
