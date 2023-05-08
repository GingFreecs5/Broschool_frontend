import Signup from "./pages/Signup";
import SignupNext from "./pages/SignupNext";
import Login from "./pages/Login";
import SignupChoose from "./pages/SignupChoose";
import SignupParent from "./pages/SignupParent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup/choose" element={<SignupChoose />} />
          <Route exact path="/signup/1" element={<Signup />} />
          <Route exact path="/signup/2" element={<SignupNext />} />
          <Route exact path="/signup/parent" element={<SignupParent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
