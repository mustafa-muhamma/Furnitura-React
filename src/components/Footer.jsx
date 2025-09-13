import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
function Footer() {
    return (
        <footer className="bg-[#1C352D] text-[#F5C9B0] py-6  ">
            <div className="container flex flex-col md:flex-row justify-between  gap-6">

                <div className="flex-1 flex flex-col items-center">
                    <img src={logo} alt="Logo" className="w-8 h-auto mb-2" style={{ width: '100px' }} />
                    <p className="text-sm leading-relaxed max-w-xs">
                        Furnitera brings timeless designs and premium quality furniture
                        to make your home truly unique.
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center">
                    <h3 className="text-base font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        <li><Link to="/products" className="hover:underline">Products</Link></li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <h3 className="text-base font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-3">
                        <Link to="#" className="hover:text-white transition">
                            <FontAwesomeIcon icon={faFacebook} size='xl' />
                        </Link>
                        <Link to="#" className="hover:text-white transition">
                        <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </Link>
                        <Link to="#" className="hover:text-white transition">
                        <FontAwesomeIcon icon={faTwitter} size='xl' />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs text-[#F5C9B0]/80 mt-6 border-t border-[#F5C9B0]/30 pt-3">
                <p>© {new Date().getFullYear()} Furnitera. All rights reserved.</p>
                <p className="mt-1">Developed by <span className="font-medium">Mustafa Muhamed</span></p>
            </div>
        </footer>
    );
}

export default Footer