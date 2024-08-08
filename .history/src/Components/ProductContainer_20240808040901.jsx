/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "./state/cartSlice";

const ProductContainer = ({ product, images, id, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div
          style={{
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
          className="flex flex-col h-[420px] p-5 items-start"
        >
          <img className="h-40 w-full mr-4" src={product.images} alt="" />
          <p className="leading-none h-7 mt-5 mb-5 text-lg">{product.name}</p>
          <div className="flex items-center">
            <img className="h-5 w-24" src={product.rating.star} alt="" />
            <p className="ml-2 text-blue-500 justify-start">
              {product.rating.count}
            </p>
          </div>
          <p className="mt-2 font-bold">${(product.price / 100).toFixed(2)}</p>
          <select
            className=" bg-gray-200 p-1 w-14 rounded-lg mb-7"
            name=""
            id=""
          >
            <option value="">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <div className={` ${product.form ? "block" : "hidden"}`}>
            <p>Color</p>
            <div>
              <button className="px-2 border-2 rounded-lg border-yellow-500">
                Yellow
              </button>
              <button className="px-2 ml-2 border rounded-lg border-grey-500">
                Teal
              </button>
            </div>
            <p className="mt-1">Size</p>
            <div>
              <button className="px-2 border-2 rounded-lg border-yellow-500">
                S
              </button>
              <button className="px-2 ml-2 border rounded-lg border-grey-500">
                M
              </button>
              <button className="px-2 ml-2 border rounded-lg border-grey-500">
                L
              </button>
            </div>
          </div>

          <button
            onClick={() => dispatch(addToCart({ images, id, price, name }))}
            className="bg-yellow-400 border-none w-full rounded-xl p-2 text-sm mt-1 cursor-pointer hover:bg-yellow-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
