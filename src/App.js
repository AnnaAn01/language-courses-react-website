import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/signin";
import LangTestPage from "./pages/langtestpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/signin" element={<SigninPage />} />
          <Route path="/langtest" element={<LangTestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
