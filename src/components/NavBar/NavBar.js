import { Component } from "react";
import {Link} from 'react-router-dom'
import '../../App.css';

class NavBar extends Component {
  render() {
    return (
    <nav className="navbar">
         
          <Link to='/drinks' className="menuButton">Drinks</Link>
          <Link to='/drinks' className="menuButton">Sobre Nós</Link>
          <Link to='/' className="menuButtonLogo">Bons Drinks</Link>
          <Link to='/drinks' className="menuButton">Nosso Time</Link>
          <Link to='/contato' className="menuButton">Contato</Link> 

      </nav>
    );
  }
}

export default NavBar;
