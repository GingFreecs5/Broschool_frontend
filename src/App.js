import Login from "./pages/login";
import SignupChoose from "./pages/SignupChoose";
import SignupAsParent from "./pages/SignupAsParent";
import SignupAsStudent from "./pages/SignupAsStudent";
import "./App.css"
import SignupAsStudent2 from "./pages/SignupAsStudent2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  signupAsStudentLink,
  signupAsStudentLink2,
  signupAsTeacherLink,
  signupAsTeacherLink2,
  signupChooseLink,
} from "./utils/LabelNames";
import SignupAsTeacher from "./pages/SignupAsTeacher";
import SignupAsTeacher2 from "./pages/SignupAsTeacher2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path={signupChooseLink} element={<SignupChoose />} />
          <Route
            exact
            path={signupAsStudentLink}
            element={<SignupAsStudent />}
          />
          <Route
            exact
            path={signupAsStudentLink2}
            element={<SignupAsStudent2 />}
          />
          <Route
            exact
            path={signupAsTeacherLink}
            element={<SignupAsTeacher />}
          />
          <Route
            exact
            path={signupAsTeacherLink2}
            element={<SignupAsTeacher2 />}
          />
          <Route exact path="/signup/parent" element={<SignupAsParent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
