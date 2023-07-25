import React from 'react'
import Hero from '../components/Hero'
import AboutKitchen from '../components/AboutKitchen'

export default function Home() {
    return (
        <div className='bg-gray-50 h-[100vh]'>
            <Hero />
            <AboutKitchen />
        </div>
    )
}
