import React from 'react';

import { RobotData } from '../types';

import Card from './Card';

interface Props {
  robots: RobotData[],
};

function CardList(props: Props) {
  const { robots } = props;

  return (
    <>
      {robots.map(robot => (
        <Card
          key={robot.id}
          email={robot.email}
          id={robot.id}
          name={robot.name}
        />
      ))}
    </>
  );
}

export default CardList;
