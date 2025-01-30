import { useState } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable"; // Importing the react-swipeable hook

// The FlatPictures component takes in an array of image URLs (pictures)
function FlatPictures({ pictures }) {
  // State to keep track of the current image index in the pictures array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image in the array
  function goToNextImage() {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // If it's the last image, go back to the first image
    }
  }

  // Function to go to the previous image in the array
  function goToPrevImage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(pictures.length - 1); // If it's the first image, go to the last image
    }
  }

  // swipeable options
  const handlers = useSwipeable({
    onSwipedLeft: goToNextImage, // Go to next image on swipe left
    onSwipedRight: goToPrevImage, // Go to previous image on swipe right
    preventDefaultTouchmoveEvent: true, // Prevent default behavior of touch move
  });

  return (
    <div className="flat-overview__carousel" {...handlers}> {/* Apply swipe handlers to the carousel */}
      <div className="flat-overview__image-container">
        {pictures.map((image, index) => (
          <img
            key={index} // Unique key for each image (index is used here)
            src={image} // Image source URL
            alt={`Image ${index + 1}`} // Alt text for accessibility
            className={`flat-overview__image ${index === currentIndex ? "active" : ""}`} // Add "active" class to the current image
          />
        ))}

        {pictures.length > 1 && (
          <div className="flat-overview__pagination">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>

      {pictures.length > 1 && (
        <div>
          <button
            className="flat-overview__button flat-overview__button--prev"
            onClick={goToPrevImage}
            aria-label="Previous Image"
          >
            <span className="sr-only">Prev</span>
          </button>

          <button
            className="flat-overview__button flat-overview__button--next"
            onClick={goToNextImage}
            aria-label="Next Image"
          >
            <span className="sr-only">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}

FlatPictures.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FlatPictures;