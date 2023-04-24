import React, { useState } from 'react'
import { createUser } from '../services/UserServices'

const InputDashboard = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        type: '',
    })

    const { first_name, last_name, email, password, type } = user

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!first_name || !last_name || !email || !password || !type) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createUser(user)
            window.location = '/sign-in'
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
                    <div className="bg-white py-5 px-4 border border-gray-400 rounded-md shadow sm:rounded-lg sm:px-10">
                        <form
                            className="space-y-4 max-w-xs"
                            onSubmit={onSubmitForm}
                        >
                            <div>
                                <label
                                    htmlFor="First Name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    id="First Name"
                                    name="First Name"
                                    type="First Name"
                                    autoComplete="First Name"
                                    placeholder='First Name'
                                    required
                                    value={first_name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            first_name: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="Last Name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Username
                                </label>
                                <input
                                    id="Last Name"
                                    name="Last Name"
                                    type="Last Name"
                                    autoComplete="Last Name"
                                    placeholder='Last Name'
                                    required
                                    value={last_name}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            last_name: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                    placeholder='John@gmail.com'
                                    required
                                    value={email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            password: e.target.value,
                                        })
                                    }
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="type"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Type
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    autoComplete="type"
                                    required
                                    value={type}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            type: e.target.value,
                                        })
                                    }
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#093545] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign Up
                                </button>
                                <a
                                    className="block text-center text-gray-500 text-sm font-bold mb-2"
                                    href="/sign-in"
                                >
                                    Already have an account? Sign in.
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
