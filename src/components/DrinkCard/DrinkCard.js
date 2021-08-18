import React, { Component } from "react";
import style from "./DrinkCard.module.css";

class DrinkCard extends Component {
  render() {
    return (
      <div className={style.postcard}>
        <img 
            className={style.img} 
            src={this.props.img} 
        />
        <p className={style.p}>{this.props.nome}</p>
      </div>
    );
  }
}

export default DrinkCard;
