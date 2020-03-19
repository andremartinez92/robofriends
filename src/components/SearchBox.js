// @flow

import React from 'react';

type Props = {
  onSearchChange: Function,
};

function SearchBox(props: Props) {
  const { onSearchChange } = props;

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onSearchChange}
        placeholder="Search robots"
        type="search"
      />
    </div>
  );
}

export default SearchBox;
