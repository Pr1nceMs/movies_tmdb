import React from "react";

const appLayout = ({ children, classnames }) => {
  return <div className={classnames}>{children}</div>;
};

export default appLayout;
