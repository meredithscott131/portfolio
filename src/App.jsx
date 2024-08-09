import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { About, Code, Home, Animation } from "./components/pages";
import withFadeIn from "./withFadeIn";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={withFadeIn(Home)()} />
        <Route path="/about" element={withFadeIn(About)()} />
        <Route path="/code" element={withFadeIn(Code)()} />
        <Route path="/animation" element={withFadeIn(Animation)()} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;