import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About, Code, Home, Animation } from "./components/pages";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
        <Route path="/animation" element={<Animation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
