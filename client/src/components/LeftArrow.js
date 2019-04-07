import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="prevArrow">
      <button className="arrow" onClick={() => props.handleClick()}></button>
    </div>
  );
};

export default LeftArrow;