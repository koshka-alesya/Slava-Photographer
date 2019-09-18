import React, {Component} from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link, animateScroll as scroll } from "react-scroll";
import About from '../about/About';
import Portfolio from '../portfolio/Portfolio';


class Burger extends Component{ 
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
      // This keeps your state in sync with the opening/closing of the menu
      // via the default means, e.g. clicking the X, pressing the ESC key etc.
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      
      // This can be used to close the menu, e.g. when a user clicks a menu item
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
render(){

  return (
    // Pass on our props
    <Menu 
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
          >
      <Link
                activeClass="active"
                to="App"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => this.closeMenu()}
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
                onClick={() => this.closeMenu()}
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
                onClick={() => this.closeMenu()}
              >
        Портфолио
        </Link>

    </Menu>
  );
};
}

export default Burger;