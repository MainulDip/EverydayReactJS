import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function Header({ title }: { title?: string }) {
  const clickerFn = () => {
    console.log("Clicked");
  };
  return (
    <header className="header">
      <h1 className="">{title}</h1>
      <Button color="green" text="Add" buttonClick={clickerFn} />
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