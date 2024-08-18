import React, { useRef } from "react";
import styles from "./Animation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../vars.css";
import "animate.css/animate.compat.css";

// Component displaying an expanded view of an image/video thumbnail
const ExpandedView = ({ thumbnail, title, onClose }) => {
    const expandedRef = useRef(null);
  
    // Prevents click propagation when clicking inside the expanded media
    const handleMediaClick = (event) => {
      event.stopPropagation();
    };
  
    return (
      <div className={styles.overlay}>
        <div className={styles.expanded} ref={expandedRef} onClick={handleMediaClick}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="/assets/Icons/menu_close_icon_white.png" alt="Close" />
          </button>
          <div className={styles.titleContainer}>
            <h3 className={styles.expandedTitle}>{title}</h3>
          </div>
          {thumbnail.src.endsWith('.mp4') ? (
            <video
              className="d-block w-100"
              src={`/assets/animation/${thumbnail.src}`}
              controls
              loop
              poster={thumbnail.poster}
              autoPlay
            />
          ) : (
            <img
              className="d-block w-100"
              src={`/assets/animation/${thumbnail.src}`}
              alt="Expanded thumbnail"
            />
          )}
        </div>
      </div>
    );
  };

  export default ExpandedView;