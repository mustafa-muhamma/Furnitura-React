function About() {
    return (
        <section className="py-20 bg-[#A6B28B]" > {/* margin-top to avoid overlapping sticky navbar */}
            <div className="container mx-auto px-4 flex flex-col  items-center text-center h-screen gap-6 justify-center">
                <div className="aboutImg py-5" style={{width: '400px'}}>
                    <img
                        src="./logo.png"
                        alt="Logo"
                        className=" mb-4"
                    />
                </div>

                <h1 className="text-4xl font-bold text-gray-800">
                    About Us
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    Welcome to our store! We are passionate about delivering
                    high-quality products and creating a smooth shopping experience
                    for our customers. From browsing to checkout, our goal is to
                    make every step simple, enjoyable, and reliable.
                </p>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    Built with ❤️ using React, Redux, and modern tools to ensure
                    performance and scalability. Thank you for being part of our journey!
                </p>
            </div>
        </section>
    )
}

export default About
