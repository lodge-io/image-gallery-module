import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow">
      <button className="arrow" onClick={() => props.handleClick()}></button>
    </div>
  );
};

export default RightArrow;