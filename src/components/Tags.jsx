import React from "react";

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

export default Tags;
