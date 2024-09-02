// import logo from './logo.svg';
import "./App.css";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import Left from "./components/Left";
import Right from "./components/Right";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Outlet } from "react-router-dom";
import DarkModeProvider, { DarkModeContext } from './context/DarkModeContext';
import { useContext } from "react";

function App() {
  const currentUser = true;
  const Layout = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
      <div className={darkMode ? "dark" : ""}>
        <Nav />
        <div style={{ display: "flex" }}>
          <Left />
          <div style={{ flex: 6 }}>
            <Outlet /> {/* This is where child routes will be rendered */}
          </div>
          <Right />
        </div>
      </div>
    );
  };

  // ensures only logged-in users can access certain routes
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <DarkModeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              {/* Define child routes for the Layout */}
              <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </DarkModeProvider>
  );
}

export default App;
