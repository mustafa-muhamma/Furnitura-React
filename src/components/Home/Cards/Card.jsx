import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../Redux/cartReducer";

function Card({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card w-full md:w-[48%] lg:w-[32%] flex flex-col items-center bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card__img w-full"
      />

      <div className="p-4 flex flex-col items-center gap-3 text-center">
        <h3 className="card__title text-[#1C352D] text-xl font-semibold">
          {product.title}
        </h3>
        <p className="card__price text-lg font-bold text-[#F5C9B0]">
          ${product.price}
        </p>

        <div className="action w-full flex items-center justify-between mt-3">
          <Link
            to={`/products/${product.id}`}
            className="action__btn flex-1 mr-2 py-2 px-4 bg-[#1C352D] text-[#F5C9B0] font-semibold rounded-xl text-center hover:bg-[#F5C9B0] hover:text-[#1C352D] transition"
          >
            Details
          </Link>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="p-2 rounded-full bg-[#1C352D] text-[#F5C9B0] hover:bg-[#F5C9B0] hover:text-[#1C352D] transition"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
