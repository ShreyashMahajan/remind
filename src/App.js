import { Route, Routes } from "react-router";
import "./App.css";
import { Archive } from "./pages/archive/archive";
import { Login } from "./pages/authentication/login/login";
import { SignUp } from "./pages/authentication/signup/signup";
import { Home } from "./pages/home/home";
import { LandingPage } from "./pages/landingPage/landingPage";
import { Trash } from "./pages/trash/trash";
import Mockman from "mockman-js";
import { RequiresAuth } from "./components/requireAuth/requireAuth";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={
          <RequiresAuth>
            <Home />
          </RequiresAuth>
        } />
        <Route path="/trash" element={
          <RequiresAuth>
            <Trash />
          </RequiresAuth>
        } />
        <Route path="/archive" element={
          <RequiresAuth>
            <Archive />
          </RequiresAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mock" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
