import React from 'react';

const ExpandButton = (props) => {
  console.log(props.view);
  if (props.photos.length && props.photo >= 0) {
    return (
      <div className="expand">
        <button className="expand" onClick={() => props.handleClick()}>{props.photo + 1}/{props.photos.length}</button>
      </div>
    );
  } else {
    return (
      <button>Loading</button>
    );
  }
};

export default ExpandButton;