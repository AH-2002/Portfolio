import React from 'react'
import ContactForm from './ContactForm'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { personalInfo } from '@/constants/PersonalInfo'

export default function Contacts() {
  return (
    <section className="py-16 bg-[#0f0715]" id="contacts">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10 ">
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <ContactForm />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
          className="contact-info xl:mx-auto">
          <div className="flex item-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-col">
              <PhoneIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
              <h1 className="text-base sm:text-lg text-white text-opacity-70">{personalInfo.phoneNumber}</h1>
            </div>
          </div>
          <div className="flex item-center space-x-8 my-8">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-col">
              <EnvelopeIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl text-white font-bold">Email</h1>
              <h1 className="text-base sm:text-lg text-white text-opacity-70">{personalInfo.email}</h1>
            </div>
          </div>
          <div className="flex item-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center flex-col">
              <MapPinIcon className="w-4 h-4 md:w-7 md:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
              <h1 className="text-base sm:text-lg text-white text-opacity-70">{personalInfo.address}</h1>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
