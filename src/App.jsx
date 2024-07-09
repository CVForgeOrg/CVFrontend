
import './App.css';
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
