import React from 'react'

function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-[#cb8773] hover:bg-[#ac3c1c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
