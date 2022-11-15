import { Link } from "react-router-dom";

function Logo() {
  return (
    <span className="link relative left-14 top-2 text-6xl font-black normal-case tracking-wide text-blue-900 no-underline drop-shadow-2xl">
      <Link to="/">PopGame</Link>
    </span>
  );
}

export default Logo;
