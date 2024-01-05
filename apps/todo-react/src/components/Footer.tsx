import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = (props: any) => {
  return (
    <footer>
      <p className="">Copyright &copy; 2022</p>
      <Link to="/about">About Page</Link>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
