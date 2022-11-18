import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import fire from "./Components/Firebase";
import Login from "./Components/Login";
import Hero from "./Components/Hero";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import UserProfile from "./Components/UserProfile";
import Organisation from "./Components/Organisation";
import Profile from "./Components/Profile";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasseordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasseordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("There is no user with this mail id");
            break;
          case "auth/wrong-password":
            setPasseordError("Wrong Password - Try Again");
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasseordError("Have a password of at least 6 characters");
            break;
        }
      });
      navigate('/UserProfile');
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };
 

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  
  return (
        <Routes>
          <Route path='/login' element={<Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        /> } />
        <Route path = '/UserProfile' element ={<UserProfile /> } />
        <Route path = '/' element = {<Organisation/>} />
        <Route path = '/pro' element  = {<Profile />} />
          </Routes>
    // <div className="App">
    //   {user ? (        
    //     <Hero handleLogout={handleLogout} />
    //   ) : (
      
    //     <Login
    //       email={email}
    //       setEmail={setEmail}
    //       password={password}
    //       setPassword={setPassword}
    //       handleLogin={handleLogin}
    //       handleSignup={handleSignup}
    //       hasAccount={hasAccount}
    //       setHasAccount={setHasAccount}
    //       emailError={emailError}
    //       passwordError={passwordError}
    //     />
    //   )}

    //   {/* <h1> "hello"</h1> */}
    // </div>
  );
};

export default App;