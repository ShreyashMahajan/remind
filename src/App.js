import { Route, Routes } from "react-router";
import "./App.css";
import { Archive } from "./pages/archive/archive";
import { Login } from "./pages/authentication/login/login";
import { SignUp } from "./pages/authentication/signup/signup";
import { Home } from "./pages/home/home";
import { LandingPage } from "./pages/landingPage/landingPage";
import { Trash } from "./pages/trash/trash";


function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Home /> */}
      {/* <Trash />  */}
      {/* <Archive /> */}
      {/* <Login /> */}
     
      <Routes>
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/' element={<Home />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
