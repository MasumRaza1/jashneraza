import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import VolunteerRegistration from "./Pages/VolunteerRegistration";
import Members from "./Pages/Members";

function App() {
  return (
    <div className="App">
       <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/volunteer-registration" element={<VolunteerRegistration />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
