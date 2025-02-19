import React from "react";
import PropTypes from "prop-types";
import {
  spinner,
  light,
  dark
} from "../../stylesheets/components/Util/LoadingIndicator.scss";

const LoadingIndicator = ({ isDark }) => (
  <div className={`${spinner} ${isDark ? dark : light}`} />
);

LoadingIndicator.propTypes = {
  isDark: PropTypes.bool
};

LoadingIndicator.defaultProps = {
  isDark: null
};

export default LoadingIndicator;
