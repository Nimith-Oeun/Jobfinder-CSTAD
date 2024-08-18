import React, { useState } from 'react'

export default function FilterSelection() {
    const [search, setSearch] = useState('');

    return (
        <div>
            <form className="w-[100%]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos..."
                        required
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
            </form>
            <div className='grid lg:grid-cols-3 gap-1  '>
                <div className='px-[5px] '>
                    <select className="mt-1.5  text-base  2xl:text-lg text-sky-900 border border-sky-500 rounded-md sm:w-[100%] min-[350px]:w-[100%] ">
                        <option value="1">Skill</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className='px-[5px]'>
                    <select className="mt-1.5 text-base  2xl:text-lg  text-sky-900 border border-sky-500 rounded-md sm:w-[100%] min-[350px]:w-[100%]">
                        <option value="1">Categorie</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
                <div className='px-[5px]'>
                    <select className="mt-1.5  text-base  2xl:text-lg text-sky-900 border border-sky-500 rounded-md sm:w-[100%] min-[350px]:w-[100%]">
                        <option value="1">Type</option>
                        <option value="2">Part Time</option>
                        <option value="3">Full Time</option>
                    </select>
                </div>
            </div>


        </div>
    )
}
