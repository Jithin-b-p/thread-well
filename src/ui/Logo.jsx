import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Link to="/home">
      <img src={logo} width={100} height={75} alt="logo" />
    </Link>
  );
}

export default Logo;
