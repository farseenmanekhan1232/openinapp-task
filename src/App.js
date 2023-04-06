import Dashboard from "./pages/Dashboard/Dashboard";
import Auth from "./pages/auth/Auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Auth />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Navigate to="/signup" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
