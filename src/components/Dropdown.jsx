import React, { useState } from "react"; // Import React and useState to manage the dropdown's state

// The Dropdown component takes two props: title and content
function Dropdown({ title, content }) {
    // Declare a state variable 'isOpen' to handle the opening and closing of the dropdown
    const [isOpen, setIsOpen] = useState(false);

    // The isOpen variable is used to conditionally render the dropdown content
    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}> {/* Apply the 'open' class if the dropdown is open */}
            {/* Dropdown header */}
            <div
                className="dropdown__header"
                onClick={() => setIsOpen(!isOpen)} // Toggle the isOpen state when clicked
            >
                <h2>{title}</h2> {/* Display the title of the dropdown */}
            </div>

            {/* Only display the content if isOpen is true */}
            {isOpen && (
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
            )}
        </div>
    );
}

export default Dropdown; // Export the Dropdown component