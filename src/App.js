import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import {BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context)
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/write" element={user ? <Write/> :<Register />} />
        <Route path="/settings" element={user ? <Settings/> :<Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/"><Home /></Route>
        { <Route exact path="/" element={<Home />}></Route> /}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route index element={<Settings />}></Route>
      
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
       
  </Routes> */}
    </Router>
  );
}

export default App;
