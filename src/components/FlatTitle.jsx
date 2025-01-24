import React from 'react';

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

export default FlatTitle;