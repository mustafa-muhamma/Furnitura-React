function Newsletter() {
  return (
    <section className="newsletter bg-gradient-to-r from-[#F5C9B0]/40 to-[#F9F6F3] py-16">
      <div className="container flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#1C352D]">
          Stay Updated
        </h2>
        <p className="text-gray-700 max-w-xl">
          Subscribe to our newsletter to receive exclusive offers, the latest
          arrivals, and style inspiration straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center w-full max-w-md gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1C352D]"
          />
          <button
            type="submit"
            className="py-3 px-6 bg-[#1C352D] text-[#F5C9B0] font-semibold rounded-xl hover:bg-[#F5C9B0] hover:text-[#1C352D] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
