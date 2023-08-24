import React from "react";
import styles from "./header.module.css";
import imagePath from "../assets/TSHeader.png";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChakraProvider, Select } from "@chakra-ui/react";

function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={styles.headerDiv}>
        <div>
          <img
            src={imagePath}
            style={{ width: "90%", height: "auto", marginRight: "10%" ,
          }}
            onClick={() => navigate("/")}
          />
        </div>

        <div
          style={{
            width: "60%",
            textAlign: "center",
            paddingRight: "10%",
          }}
        >
          <span>{t("welcome")}</span>
        </div>
        <div className={styles.menuDiv}>
          {/* <button onClick={() => navigate("/")}>🏠</button> */}
        </div>
        <div>
          <Select
            style={{ marginRight: "2px" }}
            defaultValue={i18n.language}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
          >
            <option value="en">En</option>
            <option value="hi">हि</option>
          </Select>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
