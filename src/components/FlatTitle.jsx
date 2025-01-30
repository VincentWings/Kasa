import PropTypes from "prop-types"; // Import PropTypes for prop validation

function FlatTitle({ title, location }) {
    return (
        <>
            {/* Display the flat's title */}
            <h1 className="title">{title}</h1>
            {/* Display the flat's location */}
            <p className="subtitle">{location}</p>
        </>
    );
}

// Define prop types for the component
FlatTitle.propTypes = {
    title: PropTypes.string.isRequired,   // Validate that title is a required string
    location: PropTypes.string.isRequired, // Validate that location is a required string
};

export default FlatTitle;