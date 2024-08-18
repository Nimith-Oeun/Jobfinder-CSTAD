import React from 'react'
import HeaderSlide from './components/HeaderSlide'
import HomeCategorie from './components/HomeCategorie'
import HomeGuide from './components/HomeGuid'
import HomeJobs from './components/HomeJobs'
import HomeJobSearch from './components/HomeFindJobs/HomeJobSearch'
import Feartur from './components/Feartur'

function App() {


  return (
    <>
      <header>
        <HeaderSlide />
      </header>
      <main className='xl:mt-[200px] sm:mt-[100px] mb-[100px]'>
        <section>
          <div className="flex flex-col">
            <div className="flex flex-col justify-center self-center max-w-full text-center text-black w-[647px]">
              <div className="text-4xl font-bold max-md:max-w-full">
                Brows Jobs Categories
              </div>
              <div className="mt-8 text-xl font-medium max-md:max-w-full">
                Testing crowdsopurce vesting penriod ipad launch parthy partnership
                ventur angel investor
              </div>
            </div>
            <HomeCategorie />
          </div>
        </section>
        <section className='2xl:mt-[200px] sm:mt-[100px] md:mt-[200px] mb-[200px]'>
          <HomeGuide />
        </section>
        <section>
            <div className="flex flex-col self-center m-auto max-w-full text-center text-black w-[631px]">
              <div className="text-4xl font-bold max-md:max-w-full">
                Our Popular Jobs
              </div>
              <div className="mt-8 text-xl font-medium max-md:max-w-full">
                Testing crowdsopurce vesting penriod ipad launch parthy partnership
                ventur angel investor
              </div>
            </div>
          <HomeJobs />
        </section>
        <section className='2xl:mt-[200px] sm:mt-[100px] md:mt-[200px] mb-[200px]'>
          <HomeJobSearch /> 
        </section>
        <section>
          <Feartur />
        </section>
      </main>
    </>
  )
}

export default App
