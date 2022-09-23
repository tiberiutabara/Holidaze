// imports
import { Routes, Route } from "react-router-dom"
import "./App.scss"

// component imports
import Header from './components/Header';

// page imports
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Results from "./pages/Results"
import Hotel from "./pages/Hotel"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import Owner from "./pages/Owner"
import Message from "./pages/Message";
import Enquiry from "./pages/Enquiry";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/results" element={<Results />} />
            <Route path="/hotel/:id" element={<Hotel />} />

            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/message/:id" element={<Message />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/enquiry/:id" element={<Enquiry />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
