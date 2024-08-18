import React from 'react'
import JobsHeader from './Meterial/JobsHeader'
import FilterSelection from './Meterial/FilterSelection'
import JobListing from './Meterial/JobListing'

export default function Jobs() {
  return (
    <>
       <header className='pt-[82px]'>
          <JobsHeader />
        </header>
        <main className='grid sm:grid-cols-1 lg:grid-cols-3  w-[90%] my-[100px] mx-auto gap-10  '>
          <section className='px-[5px] w-[100%] max-lg:col-span-2'>
            <FilterSelection />
          </section>
          <section className='w-[100%] col-span-2 rounded-xl'>
            <JobListing/>
            <JobListing/>
          </section>
        </main>
    </>
  )
}
