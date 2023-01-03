import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const items = [
    {
      name: "Home",
      to: "/",
      id: 0,
    },
    {
        name: "About",
        to: "/about_me",
        id: 1,
      }
  ];
  return (
    <>
      <header>
        <nav className="nav_container">
            <ul>
           {items.map(item=><li key={item.id}> <NavLink to={item.to}>{item.name}</NavLink></li>)}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
