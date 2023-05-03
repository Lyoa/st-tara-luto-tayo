import React from 'react'

function SubCategories() {
    return (
        <div>
            <div className="h-screen flex justify-center items-center flex-col">
                <ul className="grid grid-cols-2 gap-4">
                    <li className="flex justify-between items-center">
                        <button className="py-10 px-[60px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Silog Meals
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-[45px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Tinapay
                        </button>
                    </li>
                    <li>
                        <button className="py-10 px-14 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                            Pinoy Classics
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubCategories
