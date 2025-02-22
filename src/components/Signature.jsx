import React from "react";
import PropTypes from "prop-types";
import {
  signature,
  darkSignature
} from "../stylesheets/components/Signature.scss";

import SignatureImage from "../data/images/signature.svg";

const Signature = ({ isDark, className }) => (
  <img
    src={SignatureImage}
    alt="signature"
    className={`${signature} ${isDark ? darkSignature : null} ${className}`}
  />
);

Signature.propTypes = {
  isDark: PropTypes.bool,
  className: PropTypes.string
};

Signature.defaultProps = {
  isDark: null,
  className: null
};

export default Signature;
