import { useState } from "react"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <section className="py-20  bg-[#A6B28B]">
            <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6 max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-800">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Have a question or want to get in touch? Fill out the form below, 
                    and we’ll get back to you as soon as possible.
                </p>

                <form 
                    onSubmit={handleSubmit} 
                    className="w-full flex flex-col gap-4 text-left"
                >
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <textarea 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button 
                        type="submit" 
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
