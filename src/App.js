import React from 'react';
import ReactDOM from "react-dom/client";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home";
import AboutMe from "./pages/aboutMe/AboutMe";
import ContactForm from "./pages/contactForm/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topbar />}>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="contactMe" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);