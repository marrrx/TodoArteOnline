import React from 'react'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'



export default function Home() {
    return (
        <>

            <Navbar />

            <Outlet />

            <Footer />

        </>
    )
}
