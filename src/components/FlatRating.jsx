import PropTypes from "prop-types"; // Import PropTypes for prop validation
import starGrey from "../assets/img/star-grey.png";  // Import the grey star image
import starRed from "../assets/img/star-red.png";    // Import the red star image

function FlatRating({ rating, host }) {
    // Convert rating to a number and clamp between 0 and 5 to avoid unexpected rendering
    const validRating = Math.min(5, Math.max(0, Number(rating)));

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
                {/* Show red stars based on the valid rating */}
                {Array(validRating).fill().map((_, index) => (
                    <img key={index} className="star star-red" src={starRed} alt="red star" width="25" height="24" />
                ))}
                {/* Show grey stars for the remaining rating */}
                {Array(5 - validRating).fill().map((_, index) => (
                    <img key={index} className="star star-grey" src={starGrey} alt="grey star" width="25" height="24" />
                ))}
            </div>
        </div>
    );
}

// Define prop types for the component
FlatRating.propTypes = {
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept both string and number for rating
    host: PropTypes.shape({ // Validate that host is an object with specific properties
        name: PropTypes.string.isRequired, // Validate that name is a required string
        picture: PropTypes.string.isRequired, // Validate that picture is a required string
    }).isRequired,
};

export default FlatRating;