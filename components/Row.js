import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const Row = ({ className, style, withGutter, children, ...otherProps }) => {
  const baseClass = withGutter ? "sv-row--with-gutter" : "sv-row";
  const rootClass = cx(baseClass, { withGutter }, className);

  return (
    <div className={rootClass} style={style} {...otherProps}>
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  withGutter: PropTypes.bool,
  style: PropTypes.object,
};

export default Row;
