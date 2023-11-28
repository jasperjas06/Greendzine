import React from 'react'
import "./Nav.css"
const Nav = () => {
  return (
    <div className="topnav">
      <a className="active" href="/home">
         <img src='./home.png' height={30} width={30} alt='home'/>
        Home
      </a>
      <a href="/search">
      <img src='./user.png' height={25} width={25} alt='home'/>
      search
      </a>
    </div>
  );
}

export default Nav