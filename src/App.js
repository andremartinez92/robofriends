import React from "react";

import { robots } from "./data/robots";
import CardList from "./components/CardList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchField, setSearchField] = React.useState("");
  const [displayedRobots, setDisplayedRobots] = React.useState(robots);

  React.useEffect(() => {
    console.log(searchField);
    const filtered = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setDisplayedRobots(filtered);
  }, [searchField]);

  return (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={event => setSearchField(event.target.value)} />
      <CardList robots={displayedRobots} />
    </div>
  );
}

export default App;
