import { Link } from "react-router-dom"
import Cards from "./Cards/Cards"
import WhyChooseUs from "./WhyChooseUs"
import Newsletter from "./newsLetter"

function Home() {
    return (
        <>
            <header className="header flex items-center justify-center">
                <div className="container flex items-center justify-center flex-col gap-2">
                    <h1 className="header__title text-[4rem] font-bold text-[#1C352D] ">Furnitura</h1>
                    <p className="header__subtitle text-2xl font-medium text-[#1C352D]">Elevate your space, elevate your life</p>
                    <Link to="/" className="btn text-[#F5C9B0] bg-[#1C352D] font-semibold py-2 px-4 hover:bg-[#F5C9B0] hover:text-[#1C352D] transition ease-in-out duration-300">Shop Now</Link>
                </div>
            </header>
            <div className="featuredProducts  bg-[#F9F6F3] py-10">
                <h2 className="text-3xl font-semibold text-[#1C352D] text-center py-9">Featured Products</h2>
                <div>
                    <Cards />
                </div>
            </div>
            <WhyChooseUs />
            <Newsletter />

        </>

    )
}

export default Home
