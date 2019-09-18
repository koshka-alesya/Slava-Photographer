import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';


const Burger =
() => {
  return (
    // Pass on our props
    <Menu>
      <Link
                activeClass="active"
                to="App"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
        Главная
        </Link>

      <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
        Обо мне
        </Link>

     <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
        Портфолио
        </Link>

    </Menu>
  );
};

export default Burger;