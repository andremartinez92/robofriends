import React from "react";

import Card from "./Card";

function CardList(props) {
  const { robots } = props;
  return (
    <React.Fragment>
      {robots.map(robot => (
        <Card
          key={robot.id}
          email={robot.email}
          id={robot.id}
          name={robot.name}
        />
      ))}
    </React.Fragment>
  );
}

export default CardList;
