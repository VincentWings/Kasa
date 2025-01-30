import PropTypes from "prop-types"; // Import PropTypes for prop validation

function Tags({ tags }) {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <div key={index} className="tag">
                    {tag}
                </div>
            ))}
        </div>
    );
}

// Define prop types for the component
Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate that tags is an array of strings
};

export default Tags;
