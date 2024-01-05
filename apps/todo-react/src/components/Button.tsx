import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, buttonClick }: { color: string; text: string; buttonClick(event: React.MouseEvent<HTMLButtonElement>): void }) => {
  return (
    <button onClick={buttonClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

Button.propType = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
