import Login from "./pages/login";
import SignupChoose from "./pages/SignupChoose";
import SignupAsParent from "./pages/SignupAsParent";
import SignupAsStudent from "./pages/SignupAsStudent";
import "./App.css";
import SignupAsStudent2 from "./pages/SignupAsStudent2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupAsTeacher from "./pages/SignupAsTeacher";
import SignupAsTeacher2 from "./pages/SignupAsTeacher2";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {useSelector} from "react-redux";
function App() {
  const linkNames=useSelector((state)=>state.language.linkNames);
  const {signupChooseLink,signupAsStudentLink,signupAsStudentLink2,signupAsTeacherLink,signupAsTeacherLink2}=linkNames;
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
