// @flow

import React from 'react';

import { type RobotData } from '../types';

import Card from './Card';

type Props = {
  robots: RobotData[],
};

function CardList(props: Props) {
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
