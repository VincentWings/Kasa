import { useEffect, useState } from "react";
import Flat from "./Flat"; // Importing the Flat component to display individual flats

function Grid() {
  // State to store the list of flats
  const [flats, setFlats] = useState([]);

  // useEffect runs after the component is mounted
  useEffect(() => {
    // Fetch data from the logements.json file
    fetch("/src/datas/logements.json")
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch logements.json");
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        // Ensure the rating is converted to a number
        const updatedFlats = data.map(flat => ({
          ...flat,
          rating: Number(flat.rating), // Convert the rating to a number
        }));
        setFlats(updatedFlats); // Store the transformed data in the flats state
      })
      .catch((error) => console.error("Fetch error:", error)); // Log any errors
  }, []); // Empty dependency array means this runs only once

  return (
    <section className="grid">
      <div className="container">
        <div className="content">
          {/* Check if flats data is available */}
          {flats.length > 0 ? (
            // Map over the flats array and render a Flat component for each item
            flats.map((flat) => (
              <Flat
                key={flat.id} // Unique key for each flat
                id={flat.id} // Passing the flat ID as a prop
                title={flat.title} // Passing the flat title as a prop
                imageUrl={flat.cover} // Passing the flat cover image URL as a prop
                rating={flat.rating} // Passing the rating as a prop (which is now a number)
              />
            ))
          ) : (
            // Display a loading message if no data is available
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Grid;