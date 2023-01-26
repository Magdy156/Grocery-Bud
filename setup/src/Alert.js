import React, { useEffect } from "react";
import List from "./List";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [List]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
