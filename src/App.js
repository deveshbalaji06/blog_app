
import React from "react";
import { BrowserRouter as Router, Switch, Route ,Routes} from "react-router-dom";
import TopBar from "./topbar/topbar.js";
import Home from "./pages/home/home.js";
import Single from "./pages/single/single.js";
import Write from "./pages/write/write.js";
import Setting from "./pages/setting/setting.js";
import Login from "./pages/login.js";
import Register from "./pages/register/register.js";

function App() {
  const currentUser=true;
  return (
    <Router>
    <TopBar/>
    <Routes>
    <Route path="/" element={ currentUser ?  <Home />:<Register /> } /> 
    <Route path="/register" element={currentUser ?  <Home />:<Register />} />
    <Route path="/login" element={currentUser ?  <Login/>:<Register />} />
    <Route path="/setting" element={currentUser ?  <Setting/>:<Register />} />
    <Route path="/write" element={currentUser ?  <Write/>:<Register />} />
    <Route path="/single" element={<Single />} />
     
     
     
    </Routes>
  </Router>
  
  );
}

export default App;
