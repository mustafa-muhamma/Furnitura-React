import { useDispatch, useSelector } from "react-redux"
import {
  addToCart,
  removeItem,
  clearCart
} from "../../Redux/cartReducer" // adjust the path if needed
import { Link } from "react-router-dom"

function Checkout() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="checkout-page bg-[#F9F6F3] py-10">
      <div className="container flex flex-col  gap-10 py-5">

        <div className="bg-white rounded-2xl shadow-md p-8 h-fit">
          <h2 className="text-2xl font-semibold text-[#1C352D] mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => dispatch(removeItem(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-2 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-[#1C352D]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cart.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between font-bold text-[#1C352D] text-lg border-t pt-2">
              <span>Total</span>
              <span>${(cart.totalAmount + 20).toFixed(2)}</span>
            </div>
          </div>

          <Link to={'/'}
            onClick={() => dispatch(clearCart())}
            className="w-full mt-6 py-3 bg-[#1C352D] block text-center text-[#F5C9B0] rounded-xl font-semibold hover:bg-[#F5C9B0] hover:text-[#1C352D] transition"
          >
            Place Order
          </Link>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-3 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Clear Cart
          </button>

          <Link
            to="/"
            className="w-full mt-3 py-3  block text-center bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout
