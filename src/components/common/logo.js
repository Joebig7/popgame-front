import { Link } from "react-router-dom";

function Logo({className}) {
  return (
    <h1 className={className}>
      <Link to="/">PopGame</Link>
    </h1>
  );
}

export default Logo;
