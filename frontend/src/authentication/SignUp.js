import React, { useState } from 'react'
import { createUser } from '../services/UserService'

const InputDashboard = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    })

    const { first_name, last_name, email, password } = user

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!first_name || !last_name || !email || !password) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createUser(user)
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-5 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">
                    Sign Up
                </h2>
            </div>

            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-white py-5 px-4 border border-[#cb8773] rounded-md shadow sm:rounded-lg sm:px-10">
                        <form
                            className="space-y-4 max-w-xs"
                            onSubmit={onSubmitForm}
                        >
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="first_name"
                                    autoComplete="first_name"
                                    placeholder="Juan"
                                    required
                                    value={first_name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            first_name: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cb8773] focus:border-[#cb8773] sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    last_name="last_name"
                                    type="last_name"
                                    autoComplete="last_name"
                                    placeholder="dela Cruz"
                                    required
                                    value={last_name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            last_name: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cb8773] focus:border-[#cb8773] sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="name@gmail.com"
                                    required
                                    value={email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#cb8773] focus:border-[#cb8773] sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-[#cb8773] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ac3c1c] focus:border-[#ac3c1c] sm:text-sm"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]"
                                >
                                    Sign Up
                                </button>
                                <a
                                    className="block text-center text-[#cb8773] text-sm font-style: italic"
                                    href="/sign-in"
                                >
                                    Already part of the TLT Community? LOG IN.
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputDashboard
