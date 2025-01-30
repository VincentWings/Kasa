import { Link } from "react-router-dom"; // Import Link for navigation
import PropTypes from "prop-types"; // Import PropTypes to validate component props

// Flat component displays a single flat with an image and title
function Flat({ id, title, imageUrl }) {
  return (
    // Link to the flat details page using the provided 'id'
    <Link to={`/flat/${id}`} className="flat-link">
      <div className="flat">
        {/* Display the flat's image */}
        <img
          src={imageUrl}
          alt={title} // Use title as alt text for accessibility
          width="340"
          height="340"
        />
        {/* Display the flat's title */}
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

// Prop validation for the Flat component
Flat.propTypes = {
  id: PropTypes.string.isRequired, // 'id' must be a string and is required
  title: PropTypes.string.isRequired, // 'title' must be a string and is required
  imageUrl: PropTypes.string.isRequired, // 'imageUrl' must be a string and is required
};

export default Flat; // Export Flat component for use in other parts of the app