import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./routes/SignIn";
import Home from "./routes/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
