import React from 'react'

const Landing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex items-center justify-center bg-gray-100">
                <div className="max-w-md mx-auto">
                    <img
                        src="./ass"
                        alt="Hero"
                        className="mb-8"
                        style={{ maxWidth: '100%' }}
                    />
                    <h1 className="text-4xl font-bold mb-4">
                        Tara, Luto Tayo!
                    </h1>
                    <p className="text-lg mb-8">
                        Experience authentic Filipino cuisine from the comfort
                        of your own home. Our chefs use only the freshest
                        ingredients to create mouth-watering dishes that
                        showcase the diverse flavors of the Philippines. From
                        classic dishes to modern takes on traditional recipes,
                        we have something for everyone. Order now and take your
                        taste buds on a journey through the Philippines!
                    </p>
                    <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ac3c1c] hover:bg-[#cb8773] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ac3c1c]">
                        Sign Up Now
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Landing
