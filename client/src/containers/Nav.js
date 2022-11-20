import './css/Nav.css'



function Nav() {
  return (
    <div className="nav">
            <div className="nav-section">
                <h1 className="nav-logo"><span>könyves</span>bolt</h1>
                <ul className="nav-links">
                    <li className="nav-item"><a className="nav-link" href="/">Főoldal</a></li>
                    <li className="nav-item"><a className="nav-link" href="/admin">Admin</a></li>
                </ul>
            </div>
            <div className="nav-section">
                <a href="/" className="login">Log In</a>
                <a href="/" className="register">Sign Up</a>
            </div>
        </div>
  )
}

export default Nav
