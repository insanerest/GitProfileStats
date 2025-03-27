import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../public/Layout";
import HomePage from "@/components/Home";
import AboutPage from "@/components/About"; // Create this next
import Profile from "@/components/Profile"; // Create this next
import "./App.css";

function App() {
  return (
    <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/profile/:username"
              element={<Profile />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
    </Router>
  );
}

export default App;
