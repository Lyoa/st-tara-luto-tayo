import React from 'react'
import { useNavigate } from 'react-router-dom'

function Categories() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="h-screen flex justify-center items-center flex-col">
                <ul className="grid grid-cols-2 gap-4">
                    <li className="flex justify-between items-center">
                        <button
                            onClick={() => navigate('/agahan')}
                            className="py-10 px-[60px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]"
                        >
                            Agahan
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-[45px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Tanghalian
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-14 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Minandal
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate('/hapunan')}
                            className="py-10 px-[50px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]"
                        >
                            Hapunan
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-[44px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Panghimagas
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-14 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Inumin
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Categories
