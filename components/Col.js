import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Col = ({ className, style, withGutter, children, ...otherProps }) => {
  const baseClass = "sv-column";
  const rootClass = cx(baseClass, className);

  return (
    <div className={rootClass} style={style} {...otherProps}>
      {children}
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Col;
