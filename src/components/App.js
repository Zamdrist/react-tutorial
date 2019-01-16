import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  removeCharacter = characterToRemove => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character) => characterToRemove !== character)
    });
  };

  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspiring Actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };

  render() {
    const { characters } = this.state;

    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}
export default App;
