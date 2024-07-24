/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { deleteCart } from "../Components/state/cartSlice";

const Cart = ({ cartProduct }) => {
  let price = ((cartProduct.price * cartProduct.itemQuantity) / 100).toFixed(2);

  const dispatch = useDispatch();

  const handleRemove = (cartProduct) => {
    dispatch(deleteCart(cartProduct));
  };

  return (
    <div>
      <div
        key={cartProduct.id}
        style={{ border: "1px solid gray" }}
        className="rounded-md mx-20 mt-2 p-4"
      >
        <h2 className="text-green-700 mb-0">Delivery date: Tuesday, June 21</h2>
        <div className="grid grid-cols-[120px_1fr] p-3 mr-5">
          <div className="">
            <img className="h-28 w-28" src={cartProduct.images} alt="" />
          </div>
          <div>
            <h3 className="mt-0 mb-0">{cartProduct.name}</h3>
            <p className="text-red-700 font-bold mt-2 mb-2">${price}</p>
            <p className="text-xl mt-0">
              Quantity: {cartProduct.itemQuantity}
              <button
                onClick={() => handleRemove(cartProduct)}
                className="text-blue-700 border-none text-lg"
              >
                Delete
              </button>
            </p>
          </div>
        </div>
        <div className="ml-5 text-lg">
          <h3 className="mb-0">Choose a delivery option:</h3>
          <div className="flex items-center">
            <div className="mt-0">
              <input className="h-10 w-5" name="shipping" type="radio" />
            </div>
            <div>
              <div className="text-green-700">Tuesday, June 21</div>
              <div className="text-gray-700">FREE Shipping</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mt-0">
              <input className="h-10 w-5" name="shipping" type="radio" />
            </div>
            <div>
              <div className="text-green-700">Wednesday, June 15</div>
              <div className="text-gray-700">$4.99 - Shipping</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mt-0">
              <input className="h-10 w-5" name="shipping" type="radio" />
            </div>
            <div>
              <div className="text-green-700">Monday, June 13</div>
              <div className="text-gray-700">$4.99 - Shipping</div>
            </div>
          </div>
        </div>
      </div>
      ,
    </div>
  );
};

export default Cart;
