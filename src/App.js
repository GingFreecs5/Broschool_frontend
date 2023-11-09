import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
function App() {
  const linkNames = useSelector((state) => state.language.linkNames);
  const {
    loginLink,
    signupChooseLink,
    signupAsStudentLink,
    signupAsStudentLink2,
    signupAsTeacherLink,
    signupAsTeacherLink2,
    resetPasswordLink,
  } = linkNames;

  const LoginPage = React.lazy(() => import("./pages/login"));
  const ResetPassword = React.lazy(() => import("./pages/resetPassword"));

  const SignupChoose = React.lazy(() => import("./pages/SignupChoose"));

  const SignupAsParent = React.lazy(() => import("./pages/SignupAsParent"));

  const SignupAsStudent = React.lazy(() => import("./pages/SignupAsStudent"));

  const SignupAsStudent2 = React.lazy(() => import("./pages/SignupAsStudent2"));

  const SignupAsTeacher = React.lazy(() => import("./pages/SignupAsTeacher"));
  const SignupAsTeacher2 = React.lazy(() => import("./pages/SignupAsTeacher2"));

  return (
    <div className="App">
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route exact path={loginLink} element={<LoginPage />} />
              <Route
                exact
                path={resetPasswordLink}
                element={<ResetPassword />}
              />

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
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
