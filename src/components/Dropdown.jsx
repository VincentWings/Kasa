import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ title, content }) {
    // Declare a state variable 'isOpen' to manage the dropdown's open/close state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
            {/* Dropdown header */}
            <div
                className="dropdown__header"
                onClick={() => setIsOpen(!isOpen)} // Toggle the 'isOpen' state on click
            >
                <h2>{title}</h2>
            </div>

            {/* Display the content only if isOpen is true */}
            <div className="dropdown__content">
                {/* Check if content is an array to display it as a list */}
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li> // Display each item in a <li>
                        ))}
                    </ul>
                ) : (
                    // If content is not an array, display it as a paragraph
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

// Define PropTypes for the Dropdown component
Dropdown.propTypes = {
    title: PropTypes.string.isRequired, // Title must be a string and is required
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired, // Content can be a string or an array of strings
};

export default Dropdown; // Export the Dropdown component