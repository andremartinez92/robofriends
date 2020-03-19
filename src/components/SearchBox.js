import React from "react";

function SearchBox(props) {
  const { onSearchChange } = props;

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onSearchChange}
        placeholder="search robots"
        type="search"
      />
    </div>
  );
}

export default SearchBox;
