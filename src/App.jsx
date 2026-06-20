import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { About, Code, Home, Animation, Reel } from "./components/pages";
import withFadeIn from "./withFadeIn";
import styles from "./App.module.css";

function App() {
  return (
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={withFadeIn(About)()} />
          <Route path="/projects" element={withFadeIn(Code)()} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;