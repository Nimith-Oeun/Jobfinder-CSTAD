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
      <main className='w-[90%] my-[100px] mx-auto '>
        <section className="flex overflow-hidden flex-col items-center bg-white max-md:px-5 max-md:pb-24 px-5">
            <div className=" w-full max-md:max-w-full">
              <div className="flex gap-16 max-md:flex-col">
                <ContactInfo />
                <ContactForm />
              </div>
            </div>
        </section>
      </main>
    </>
  )
}
