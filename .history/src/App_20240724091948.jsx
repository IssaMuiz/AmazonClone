import ProductComponent from "./Components/ProductComponent";
import React from "react";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";

export const CartContext = React.createContext();

function App() {
  /*  let cartAction = false;
  let cart = [];
  const [cartQuantity, setCartQuantity] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const cartIncrement = (product) => {
    if (!cartAction) {
      setCartQuantity(cartQuantity + 1);
      setName(product.name);
      setImage(product.images);
      setPrice(product.price);

      cart = [
        ...cart,
        {
          productName: product.name,
          quatity: 1,
        },
      ];
      console.log(cart);
    }
  }; */
  const state = useSelector((state) => state.user.addToCart);
  const dispatch = useDispatch();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductComponent />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="*"
          element={<h1 className="text-center mt-20">PAGE NOT FOUND!</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
