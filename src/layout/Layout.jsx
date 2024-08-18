import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarList from '../components/Navbar'
import Foolter from '../components/Foolter'

export default function Layout() {
  return (
    <>
        
        <header>
        <NavbarList/>
        </header>
        <Outlet />
        <Foolter 
        className="w-full fixed z-20 inline-block px-[5%] bg-[#00214A]"
        />
    </>
  )
}
