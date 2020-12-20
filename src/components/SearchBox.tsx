import React from 'react';

interface Props {
  onSearchChange: (searchField: string) => void,
};

function SearchBox(props: Props) {
  const { onSearchChange } = props;

  return (
    <div className="pa2">
      <input
        aria-label="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={event => onSearchChange(event.target.value)}
        placeholder="Search robots"
        type="search"
      />
    </div>
  );
}

export default SearchBox;
