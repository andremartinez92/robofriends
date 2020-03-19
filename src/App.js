import React from "react";

import { robots } from "./data/robots";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot =>
      robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
