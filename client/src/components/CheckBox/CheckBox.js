import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./CheckBox.css";

const CheckBox = ({ checked }) => {
  return (
    <div className="CheckBox">
      {checked === "True" ? (
        <FontAwesomeIcon icon={faCheckCircle} />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} />
      )}
    </div>
  );
};

export default CheckBox;
