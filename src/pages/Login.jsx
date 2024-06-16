import { auth, provider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    event.target.email.value;
    event.target.password.value;
  };

  return (
    <div className="mt-20">
      <p>Sign in with Google</p>
      <form action="" onSubmit={handleSignUp}>
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">Password:</label>
        <input type="password" />
        <button type="submit">Sign in</button>
      </form>

      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
