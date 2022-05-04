import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Sobre mim</Link>
          </li>
          <li>
            <Link to="/repositories">Repositórios</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
