import React from 'react'
import logo from '../assets/logo.png'

const Splash = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="w-50 h-50" />
            <h1 className="text-[#ac3c1c] text-7xl font-bold">
                Tara, Luto Tayo!
            </h1>
        </div>
    )
}

export default Splash
