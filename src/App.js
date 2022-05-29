import Home from "./pages";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/signin";
import LangTestPage from "./pages/langtestpage";
import PlayQuizPage from "./pages/playquizpage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/{language-courses-react-website}"
            exact
            element={<Home />}
          />

          <Route path="/signin" element={<SigninPage />} />
          <Route path="/langtest" element={<LangTestPage />} />
          <Route path="/quizgame" element={<PlayQuizPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
