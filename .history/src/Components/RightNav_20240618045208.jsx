import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const RightNav = () => {
  const cartIncrement = useSelector((state) => state.user.cartQuantity);
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div className="flex tablet:flex ml-2 justify-end text-sm tablet:w-54 tablet:mr-2 mobile:hidden">
        <a className="text-sm" href="">
          <p className=" text-white whitespace-nowrap ">
            Return <br /> <strong className="">&Orders</strong>
          </p>
        </a>
        <Link
          to="/Checkout"
          className="relative flex items-center hover:border"
          href="/src/Components/Checkout.jsx"
        >
          <img
            className="w-10 h-7 ml-3"
            src="src/assets/images/cart-icon.png"
            alt=""
          />
          <p className="absolute text-lg text-center right-9 bottom-4 w-5  text-yellow-600 font-bold">
            {cartIncrement}
          </p>
          <p className="mt-6  font-bold text-white">Cart</p>
        </Link>
        <div className="flex items-center ml-3">
          {user ? (
            <div className="flex items-center gap-3">
              <p>{user.displayName}</p>
              <img
                className="h-10 w-10 rounded-3xl"
                src={user.photoURL}
                alt=""
              />
              <button onClick={signUserOut}>Log Out</button>
            </div>
          ) : (
            <Link to="/Login" className="mr-10 text-white text-xl">
              Login
            </Link>
          )}
        </div>
      </div>
      <img
        className="h-4 tablet:hidden mobile:block ml-5 mr-6"
        src="src/assets/images/hamburger-menu (1).png"
        alt=""
      />
    </div>
  );
};

export default RightNav;
