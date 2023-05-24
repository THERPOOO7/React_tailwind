import React from 'react'

function Contact() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold mb-20">Contact Me</h2>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" className="w-full border border-gray-300 rounded-lg py-2 px-4" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" className="w-full border border-gray-300 rounded-lg py-2 px-4" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea id="message" className="w-full border border-gray-300 rounded-lg py-2 px-4"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Send Message</button>
                </form>
            </div>
        </section>
    );
}
export default Contact