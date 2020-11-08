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
        <FontAwesomeIcon className="CheckBox__valid" icon={faCheckCircle} />
      ) : (
        <FontAwesomeIcon className="CheckBox__invalid" icon={faTimesCircle} />
      )}
    </div>
  );
};

export default CheckBox;
