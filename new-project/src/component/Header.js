import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="card">
            <div className="row">
              <h1>Header</h1>
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
