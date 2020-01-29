import React from "react"
import logo from "../images/doyy.png"

const navLinks = ["about", "blog"]

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="doyy logo" className="nav-logo" />
          </a>
        </li>
        {navLinks.map(l => (
          <li key={l}>
            <a className="nav-link" href={`/${l}/`}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
