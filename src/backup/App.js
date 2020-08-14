import {hot} from "react-hot-loader";
import React, { Component} from "react";
import "./App.scss";
import Table from './components/Table';
import Form from './components/Form';
import Clock from './components/Clock';

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i != index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render(){
    const { characters } = this.state

    return(
      <div className="container">
        <h1> Hello, World!</h1>
        <Clock />
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default hot(module)(App);
