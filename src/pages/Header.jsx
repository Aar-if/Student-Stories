import React from "react";
import styles from "./header.module.css";
import imagePath from "../assets/tekdi-logo-black.png";

function Header() {
  return (
    <React.Fragment>
      <div className={styles.headerDiv}>
        <div>
          <img src={imagePath} style={{ width: "50px", height: "auto" }} />
        </div>

        <div
          style={{
            textAlign: "center",
            marginLeft: "10px",
            borderLeft: "2px solid gray",
            paddingLeft: "10px",
          }}
        >
          <h3>Onset Stories</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
