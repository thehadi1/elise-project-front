import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const Home = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [messag, setMessag] = useState(null);

  const token = useSelector((state) => state.user.message);
  //const messagee = token.payload.message;

  useEffect(() => {
    // Function to get user information from localStorage
    const getUser = () => {
      let userData = localStorage.getItem("user");
      if (userData) {
        return JSON.parse(userData);
      }
      return null;
    };

    // Set the user state after the component mounts
    setUser(getUser());
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const clickk = () => {
    console.log(token);
  };
  return (
    <>
      <button className="logout" onClick={handleLogOut}>
        Logout
      </button>
      <button className="logout" onClick={clickk}>
        click
      </button>
      {user ? (
        <div>
          <h1>Bonjour votre token est : {user.body.token}</h1>

          <Link to="/">Home</Link>
        </div>
      ) : (
        <Link to="/">Home</Link>
      )}
    </>
  );
};

export default Home;
