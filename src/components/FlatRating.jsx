import React from 'react';
import starGrey from "../assets/img/star-grey.png";  // Import the grey star image
import starRed from "../assets/img/star-red.png";    // Import the red star image

function FlatRating({ rating, host }) {
    return (
        <div className="ratings-container">
            {/* Display the host's name and picture */}
            <div className="owner">
                <div className="owner__name">{host.name}</div>
                <div className="owner__pic">
                    <img src={host.picture} alt="host" width="60" height="60" /> {/* Host's picture */}
                </div>
            </div>

            {/* Display the ratings using stars */}
            <div className="ratings">
                {/* Show red stars based on the rating */}
                {Array(rating).fill().map((_, index) => (
                    <img key={index} className="star star-red" src={starRed} alt="red star" width="25" height="24" />
                ))}
                {/* Show grey stars for the remaining rating */}
                {Array(5 - rating).fill().map((_, index) => (
                    <img key={index} className="star star-grey" src={starGrey} alt="grey star" width="25" height="24" />
                ))}
            </div>
        </div>
    );
}

export default FlatRating;