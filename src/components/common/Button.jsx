import { Children } from "react";
import { Link } from "react-router-dom";

const Button = ({ style, link, text }) => {
  return (
    <Link to={link} className={`button ${style}`}>
      {text}
    </Link>
  );
};

export default Button;
