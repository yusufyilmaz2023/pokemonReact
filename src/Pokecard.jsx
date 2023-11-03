import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="pokecard">
        <h1 className="pokecard-title">Pokemon</h1>
        <div className="pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="pokecard-data"> Type: {this.props.type}</div>
        <div className="pokecard-data"> Exp: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
