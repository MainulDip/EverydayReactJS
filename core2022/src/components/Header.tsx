import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

function Header({ title, onAdd, showAdd }: { title?: string; onAdd?: any; showAdd: boolean }) {
  const location = useLocation();
  const clickerFn = () => {
    console.log("Clicked");
    console.log(location.pathname);
    onAdd();
  };

  return (
    <header className="header">
      <h1 className="">{title}</h1>
      {location?.pathname === '/' && <Button color={showAdd ? "black" : "green"} text={showAdd ? "Close" : "Add"} buttonClick={clickerFn} />}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
