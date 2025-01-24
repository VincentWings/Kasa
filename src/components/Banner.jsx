import React from "react"; // Import React to create the component
import banner from "../assets/img/banner.jpg"; // Import the banner image

// Banner component displays a section with an image and a heading
function Banner() {
  // Declare a variable to hold the heading text
  const headingText = "Chez vous, partout et ailleurs";

  return (
    <section className="banner"> {/* Main container for the banner */}
      <div className="container"> {/* Container to center and structure the content */}
        <div className="content"> {/* Content wrapper for the heading and image */}
          {/* Use the headingText variable in the <h1> tag */}
          <h1>{headingText}</h1>

          {/* Image displayed below the heading, sourced from the imported banner */}
          <img src={banner} alt="Beach" width="1240" height="223" />
        </div>
      </div>
    </section>
  );
}

export default Banner; // Export the Banner component so it can be used in other parts of the app