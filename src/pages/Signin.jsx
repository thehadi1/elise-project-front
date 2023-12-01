import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/UserSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useNavigate } from "react-router-dom";

const Signin = () => {
  //states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logMsg, setLogMsg] = useState("");
  const [tokk, setTokk] = useState("");

  const navigate = useNavigate();

  //redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // const { Token } = useSelector((state) => state);

  const logConnect = async (e) => {
    e.preventDefault();
    try {
      let userCredentials = { email: username, password: password };

      dispatch(loginUser(userCredentials)).then((res) => {
        console.log(res);
        setTokk(res.payload.body.token);
        if (res.payload.body.token) {
          setUsername("");
          setPassword("");
          navigate("/home");
        }
      });

      //console.log(res.data.body);
      //   setLogMsg(res.data.message);
      //setTokk(res.data.body.token);
    } catch (error) {
      alert("Please check your credentials");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-title">Sign In</h1>
        {/* {Token} */}
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="signin-button" onClick={logConnect}>
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="error-msg">{error}</p>}
        </form>

        {tokk && <p className="success-msg">{tokk}</p>}
      </div>
    </div>
  );
};

export default Signin;
