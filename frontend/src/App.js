import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./styles/Global.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bio" element={<Bio />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;