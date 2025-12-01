import { Link, NavLink } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
<div className="container">
<Link className="navbar-brand fw-bold text-primary" to="/">DV Tours & Travels</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
<span className="navbar-toggler-icon"></span>
</button>


<div className="collapse navbar-collapse" id="navmenu">
<ul className="navbar-nav ms-auto align-items-lg-center">
<li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/tours">Tours</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
</ul>
</div>
</div>
</nav>
)
}