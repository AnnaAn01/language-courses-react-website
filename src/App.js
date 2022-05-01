import Home from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/signin" element={<SigninPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
