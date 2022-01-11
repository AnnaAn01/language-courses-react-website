import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
