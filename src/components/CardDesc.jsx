import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart, faBolt, faStar } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartReducer"

function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [selectedImg, setSelectedImg] = useState("")
    const dispatch = useDispatch()

    async function fetchProduct() {
        try {
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            if (!res.ok) throw new Error("Failed to fetch product")
            const data = await res.json()
            setProduct(data)
            setSelectedImg(data.thumbnail)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [id])

    if (loading) return <p className="text-center py-10">Loading product...</p>
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>
    if (!product) return null

    return (
        <div className="product-page bg-[#F9F6F3]">
            <div
                className="relative h-64 flex flex-col justify-center items-center text-center text-[#F9F6F3]"
                style={{
                    backgroundImage: `url(${product.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <h1 className="text-4xl font-bold relative z-10">{product.title}</h1>
                <p className="text-lg mt-2 relative z-10">{product.brand}</p>
                <p className="text-sm mt-1 relative z-10 opacity-80">
                    Home / {product.category} / {product.title}
                </p>
            </div>

            <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 flex flex-col items-center">
                    <img
                        src={selectedImg}
                        alt={product.title}
                        className="rounded-2xl shadow-lg w-full max-h-[500px] object-contain bg-white"
                    />
                    <div className="flex gap-3 mt-4">
                        {product.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumb"
                                onClick={() => setSelectedImg(img)}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${selectedImg === img ? "border-[#1C352D]" : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-4">
                    <h2 className="text-3xl font-bold text-[#1C352D]">{product.title}</h2>
                    <p className="text-gray-600">{product.brand}</p>

                    <div className="flex items-center gap-1 text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                className={i < Math.round(product.rating) ? "" : "text-gray-300"}
                            />
                        ))}
                        <span className="ml-2 text-gray-600">({product.rating})</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-2xl font-bold text-[#1C352D]">${product.price}</p>
                        {product.discountPercentage > 0 && (
                            <span className="text-red-500 font-semibold">
                                -{product.discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    <p
                        className={`font-medium ${product.availabilityStatus === "In Stock"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                    >
                        {product.availabilityStatus}
                    </p>

                    <p className="text-gray-700 leading-relaxed">{product.description}</p>

                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="flex items-center gap-2 px-6 py-3 bg-[#1C352D] text-[#F5C9B0] rounded-xl font-semibold hover:bg-[#F5C9B0] hover:text-[#1C352D] transition"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                        </button>
                        <Link to="/cart" onClick={() => dispatch(addToCart(product))} className="flex items-center gap-2 px-6 py-3 bg-[#F5C9B0] text-[#1C352D] rounded-xl font-semibold hover:bg-[#1C352D] hover:text-[#F5C9B0] transition">
                            <FontAwesomeIcon icon={faBolt} /> Buy Now
                        </Link>
                    </div>

                    <div className="mt-4 flex gap-2">
                        {product.tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10">
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-[#1C352D] mb-4">
                        Product Details
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li>
                            <strong>SKU:</strong> {product.sku}
                        </li>
                        {product.dimensions && (
                            <li>
                                <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
                                {product.dimensions.height} x {product.dimensions.depth} cm
                            </li>
                        )}
                        <li>
                            <strong>Stock:</strong> {product.stock} available
                        </li>
                        {product.warrantyInformation && (
                            <li>
                                <strong>Warranty:</strong> {product.warrantyInformation}
                            </li>
                        )}
                        <li>
                            <strong>Return Policy:</strong> {product.returnPolicy}
                        </li>
                        <li>
                            <strong>Shipping:</strong> {product.shippingInformation}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
