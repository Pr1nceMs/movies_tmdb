import React from "react";

const Main = ({ children, classNames }) => {
  return <div className={classNames}>{children}</div>;
};

export default Main;
