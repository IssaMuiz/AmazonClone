import { useSelector } from "react-redux";
import Cart from "./Cart";

const Checkout = () => {
  const cartProduct = useSelector((state) => state.user.cartItems);
  const totalAmount = useSelector((state) => state.user.cartTotalAmount);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex justify-between mx-10 py-5 bg-white h-10">
        <div>
          <img
            className="h-8 "
            src="src/assets/images/amazon-logo.png"
            alt=""
          />
        </div>
        <div className="text-xl">Checkout ({cartProduct.length})</div>
        <div>
          <img
            className=""
            src="src/assets/images/checkout-lock-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-20 mt-28">
        <h1 className="text-2xl mt-14 font-bold mb-5 ">Review your order</h1>
        <div style={{ border: "1px solid gray" }} className="rounded-md ">
          <div className="mx-3 my-6 ">
            <h2 className="font-bold mb-0">Order Summary</h2>
            <div
              style={{ borderBottom: "1px solid grey" }}
              className="flex justify-between"
            >
              <ul className="flex-col p-0 text-lg list-none">
                <li>Items ({cartProduct.length})</li>
              </ul>
              <ul className="text-end text-lg list-none">
                <li>${(totalAmount / 100).toFixed(2)}</li>
              </ul>
            </div>
            <div className="flex justify-between text-red-700 text-xl font-bold ">
              <p className="flex-start">Order total:</p>
              <p className="flex-end">${(totalAmount / 100).toFixed(2)}</p>
            </div>
            <button className=" border-none rounded-xl bg-yellow-400 w-full px-36 py-4">
              Place your order
            </button>
          </div>
        </div>
      </div>
      {cartProduct.map((product) => {
        return (
          <div key={product.id}>
            <Cart cartProduct={product} />
          </div>
        );
      })}
    </>
  );
};

export default Checkout;
