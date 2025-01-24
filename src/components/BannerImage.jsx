import React from "react"; // Import React to create the component
import imageBanner from "../assets/img/image-banner.jpg"; // Import the image to be used in the banner

// BannerImage component displays an image in a section
function BannerImage() {
  // Declare a variable to hold the image source
  const imageSrc = imageBanner;

  return (
    <section className="banner banner-image"> {/* Main section container for the banner */}
      <div className="container"> {/* Container to center and structure the content */}
        <div className="content"> {/* Content wrapper for the image */}
          {/* Use the imageSrc variable for the src attribute of the <img> tag */}
          <img src={imageSrc} alt="Beach" width="1240" height="223" />
        </div>
      </div>
    </section>
  );
}

export default BannerImage; // Export the BannerImage component for use in other parts of the app