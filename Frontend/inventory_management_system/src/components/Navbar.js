import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

export default function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Clear search after submitting
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active text-white fs-4" aria-current="page">{props.title}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link active text-white fs-4" aria-current="page">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link active text-white fs-4" aria-current="page">About</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search products..." 
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary fs-5" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}