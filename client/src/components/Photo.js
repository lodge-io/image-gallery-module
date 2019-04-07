import React from 'react';

const Photo = ({ photos, photo }) => {
  console.log(photo);
  console.log(photos[photo]);
  if (photos.length && photo >= 0) {
    if (photo === photos.length - 1) {
      return (
        <div>
          <img className="main-photo" src={photos[photo].imageURL}/>
        </div>
      );
    } else if (photo === 0) {
      return (
        <div>
          <img className="main-photo" src={photos[photo].imageURL}/>
        </div>
      );
    } else {
      return (
        <div>
          <img className="main-photo" src={photos[photo].imageURL}/>
        </div>
      );
    }
  } else {
    return (
      <div>Loading</div>
    );
  }
};

export default Photo;