import { Component } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Header.module.css"

class Header extends Component{

    render(){             
        return <header className={style.header}>           

        <NavBar/>
        
        </header>
    }
}

export default Header;