import React from "react";
import { HiLocationMarker, HiPhone , HiMail , HiClock } from "react-icons/hi";

function ContactInfo() {
  return (
    <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full text-black max-md:max-w-full">
        <div className="text-xl font-medium">
          <div className="flex flex-col grow shrink-0 justify-center basis-0 min-h-[402px] w-fit max-md:max-w-full">
            <h2 className="text-4xl font-bold max-md:max-w-full max-sm:text-center max-sm:text-3xl">
              Our Contact
            </h2>
            <address className="mt-7 max-md:max-w-full not-italic flex max-sm:text-base">
              <HiLocationMarker className="w-[50px]" />
              #12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab, Khan
              Porsenchey, Phnom Penh, Cambodia
            </address>
            <p className="mt-7 max-md:max-w-full flex gap-1 max-sm:text-base"><HiPhone/>+855 12 555 666</p>
            <p className="mt-7 underline max-md:max-w-full max-sm:text-base">
              <a
                href="mailto:info@jobify.works"
                className="underline flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiMail/>
                info@HR.works
              </a>
            </p>
            <p className="mt-7 flex gap-1 items-center max-sm:text-base"><HiClock/>Monday — Friday 8:00am - 6:00pm</p>
          </div>
        </div>
        <div className=" text-4xl font-bold whitespace-nowrap  max-md:px-5 max-md:pb-2.5 max-md:mr-2.5 max-md:max-w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631478133429!2d104.89920651169284!3d11.578254588576018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1724040290244!5m2!1sen!2skh"
            className="w-full lg:h-[250px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
