import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
// import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
    const navigate = useNavigate()
    // const [nav, setNav] = useState(false)

    return (
        <div>
            <div className="flex justify-between items-center bg-white py-4 px-6 shadow">
                <button onClick={() => navigate('/')}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-[100px] w-[125px]"
                    />
                </button>
                <div className="inline justify-center items-center">
                    <div className="inline">
                        <ul className="list-none flex justify-between items-center text-[#ac3c1c]">
                            <li className="mr-4">
                                <a href="/">Home</a>
                            </li>
                            <li className="mr-4">
                                <a href="/">Recipes</a>
                            </li>
                            <li className="mr-4">
                                <a href="/">Recipe Finder</a>
                            </li>
                            <li className="mr-4">
                                <a href="/">Community</a>
                            </li>
                            <li className="mr-4">
                                <a href="/">About Us</a>
                            </li>
                            <li className="mr-4">
                                <a href="/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <form className="mr-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-400 rounded-lg py-2 px-4"
                        />
                        <button className="bg-[#ac3c1c] hover:bg-[#cb8773] text-white rounded-lg py-2 px-4 ml-2">
                            Search
                        </button>
                    </form>
                    <button className="bg-[#ac3c1c] text-white rounded-lg py-2 px-4">
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
