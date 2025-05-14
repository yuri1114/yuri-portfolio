import { Route, Routes } from "react-router-dom";
import "./styles/global.scss";
import Prologue from "./pages/Prologue/Prologue";
import Menu from "./pages/Menu/Menu";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Prologue />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
