// @flow

import React from 'react';

type Props = {
  email: string,
  id: number,
  name: string,
};

function Card(props: Props) {
  const { email, id, name } = props;

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
