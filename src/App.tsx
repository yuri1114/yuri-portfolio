import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/global.scss";
import Prologue from "./pages/Prologue/Prologue";
import Menu from "./pages/Menu/Menu";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Header from "./components/Header/Header";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Prologue />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/project" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
