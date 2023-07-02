import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { CoordinatorDashboard } from "./components/CoordinatorDashboard";
import { MenteeDashboard } from "./components/MenteeDashboard";
import { MentorDashboard } from "./components/MentorDashboard";
import { CoordinatorDashboardMenteeList } from "./components/CoordinatorDashboardMenteeList";
import { CDFeedback } from "./components/CDFeedback";
import { CDRequests } from "./components/CDRequests";
import Forms from "./components/Forms";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Forms />} />
        <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/cd-dashboard" element={<CoordinatorDashboard />} />
        <Route path="/cd-mentee" element={<CoordinatorDashboardMenteeList />} />
        <Route path="/cd-feedback" element={<CDFeedback />} />
        <Route path="/cd-requests" element={<CDRequests />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
