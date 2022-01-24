import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title, onAdd, showAdd }: { title?: string; onAdd?: any; showAdd: boolean }) {
  const clickerFn = () => {
    console.log("Clicked");
    onAdd();
  };

  return (
    <header className="header">
      <h1 className="">{title}</h1>
      <Button color={showAdd ? "black" : "green"} text={showAdd ? "Close" : "Add"} buttonClick={clickerFn} />
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
