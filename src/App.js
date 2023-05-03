import Signup from "./pages/Signup";
import SignupNext from "./pages/SignupNext";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup/1" element={<Signup />} />
          <Route exact path="/signup/2" element={<SignupNext />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
