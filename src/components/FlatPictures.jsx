import React from 'react';

function FlatPictures({ pictures }) {
  return (
    <div className="flat-pictures">
      {pictures.map((picture, index) => (
        <img key={index} src={picture} alt="Apartment" />
      ))}
    </div>
  );
}

export default FlatPictures;
