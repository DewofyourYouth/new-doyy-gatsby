import React from "react"
import logo from "../images/doyy.png"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="">
            <img src={logo} className="nav-logo" />
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            This is a link
          </a>
        </li>
        <li>
          <a className="nav-link" href="">
            This is a link
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
