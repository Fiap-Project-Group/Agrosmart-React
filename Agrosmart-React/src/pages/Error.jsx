import "../Css/Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error-container">
      <h1>404</h1>
      <p>Desculpe! Não foi possível encontrar essa página</p>
      <button>
        <Link to={"/"}>
          Volte ao ínicio
        </Link>
      </button>
    </div>
  );
}

export default Error;
