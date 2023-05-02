import React, { useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { updateUser } from '../services/UserService'

const EditDashboard = ({ user }) => {
    const [userDetails, setUserDetails] = useState({
        id: user?.id || '',
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        email: user?.email || '',
        password: user?.password || '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await updateUser(userDetails)
        } catch (error) {
            console.error(error.message)
        }
    }

    // useEffect(() => {
    //     const saveChanges = async () => {
    //         try {
    //             await updateUser(userDetails)
    //         } catch (error) {
    //             console.error(error.message)
    //         }
    //     }

    //     saveChanges()
    // }, [userDetails])

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className="flex justify-center group relative py-1 px-10">
                <button
                    className="rounded-md text-white hover:text-[#ac3c1c]"
                    onClick={toggleModal}
                >
                    <FiEdit className="text-[#ac3c1c]" />
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 scale-0 rounded bg-gray-300 p-2 text-xs text-black group-hover:scale-100">
                        Edit
                    </span>
                </button>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-white rounded-lg shadow-xl">
                            <div className="p-6">
                                <h2 className="text-lg font-bold mb-4 text-center text-gray-700">
                                    Edit User Information
                                </h2>

                                <form>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="first_name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac3c1c] focus:border-[#ac3c1c] sm:text-sm"
                                            name="first_name"
                                            type="text"
                                            placeholder="First Name"
                                            value={userDetails.first_name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="last_name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac3c1c] focus:border-[#ac3c1c] sm:text-sm"
                                            name="last_name"
                                            type="text"
                                            placeholder="Last Name"
                                            value={userDetails.last_name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ac3c1c] focus:border-[#ac3c1c] sm:text-sm"
                                            value={userDetails.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <button
                                            className="bg-[#ac3c1c] hover:bg-[#ac3c1c] text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={(e) => {
                                                handleSubmit(e)
                                                toggleModal()
                                            }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="bg-[#cb8773] hover:bg-[#ac3c1c] text-white font-bold py-2 px-4 rounded"
                                            onClick={toggleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditDashboard
