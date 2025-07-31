import React from 'react'
import ContactHeader from './components/ContactHeaeder'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/contactForm'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
      <header className='pt-[80px]'>
        <Helmet>
          <title>Contact / HR . Contact</title>
        </Helmet>
        <ContactHeader />
      </header>
      <main className='relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 max-sm:py-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
