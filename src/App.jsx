import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash.jsx";
import Onboarding from './pages/Onboarding.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Message from './pages/Message.jsx'
//import {auth} from './firebase.js'
//import {useAuthState} from 'react-firebase-hooks/auth'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat-app" element={<Splash />}></Route>
        <Route path="/chat-app/Onboarding" element={<Onboarding />}></Route>
        <Route path="/chat-app/SignIn" element={<SignIn/>}></Route>
        <Route path="/chat-app/SignUp" element={<SignUp/>}></Route>
        <Route path="/chat-app/SignUp/Message" element={<Message/>}></Route>
        <Route path="/chat-app/SignIn/Message" element={<Message/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;
/*
const App = () => {
  return(
    <>
      <p>hello</p>
    </>
  )
}
export default App;
*/