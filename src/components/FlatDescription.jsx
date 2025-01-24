import React from "react"; // Import React library
import Dropdown from "../components/Dropdown"; // Import Dropdown component for reusable dropdowns

// FlatDescription component displays a description and a list of equipment using dropdowns
function FlatDescription({ description, equipments }) {
    return (
        <section className="description">
            <div className="container">
                <div className="content">
                    {/* Dropdown for displaying the description */}
                    <Dropdown title="Description" content={description} />

                    {/* Dropdown for displaying the equipment list */}
                    <Dropdown
                        title="Equipments"
                        content={
                            // Check if equipments array exists and has content
                            equipments && equipments.length > 0
                                ? equipments // If yes, display the list
                                : ["No equipment available"] // If no equipment, show a default message
                        }
                    />
                </div>
            </div>
        </section>
    );
}

export default FlatDescription; // Export the component for use in other parts of the app