import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const emailEntered = emailInputRef.current.value;
    const passwordEntered = passwordInputRef.current.value;
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCASQbUtn0IDobv843kGasyCANypbX3Ei8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCASQbUtn0IDobv843kGasyCANypbX3Ei8";
    }
    sendData(url, emailEntered, passwordEntered)
      .then((result) => {
        console.log("result", result);
        authCtx.login(result.idToken);
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        history.replace("/store");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendData = async (url, email, password) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    let errorMessage = "Authentication Faild !!";
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
      alert(errorMessage);
    }
    throw new Error(errorMessage);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email" style={{ marginLeft: "-18rem" }}>
            Your Email
          </label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="password" style={{ marginLeft: "-16rem" }}>
            Your Password
          </label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
