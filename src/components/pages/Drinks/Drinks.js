import React, { Component } from "react";
import DrinkCard from "../../DrinkCard/DrinkCard";
import  style  from "./Drinks.module.css";

class Drinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [],
    };
  }

  buscaDados = async () => {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    const drinks = await response.json();
    this.setState({ drinks: drinks.drinks });
  };

  componentDidMount() {
    this.buscaDados();
  }

  render() {
    let { drinks } = this.state;

    return (
        <section className={style.body}>
     
        {drinks.map((drink) => (

          <DrinkCard
            key={drink.idDrink}
            nome={drink.strDrink}
            img={drink.strDrinkThumb}
          />

        ))}

      </section>
    );
  }
}

export default Drinks;
