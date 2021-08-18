import React, { Component } from "react";
import style from "./Button.module.css";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

  }

  contar = () => {
    this.setState({ counter: this.state.counter + 1 });    
  };

  componentDidUpdate(){
    console.log('fui atualizado')
  }

  render() {
    return (
      <button
        className={style.button}
        onClick={this.contar}
        disabled={this.state.disabled}
      >
        {this.state.counter}
      </button>
    );
  }
}

export default Button;
