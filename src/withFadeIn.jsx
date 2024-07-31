import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./App.module.css";

const withFadeIn = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();

    useEffect(() => {
      const element = document.getElementById("fade-in-element");
      if (element) {
        element.classList.remove(styles["fade-in"]);
        // Trigger reflow to restart the animation
        void element.offsetWidth;
        element.classList.add(styles["fade-in"]);
      }
    }, [location.pathname]);

    return (
      <div id="fade-in-element">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeIn;