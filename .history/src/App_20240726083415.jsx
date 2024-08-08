import ProductComponent from "./Components/ProductComponent";
import Checkout from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
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
