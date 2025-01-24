import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FlatPictures from '../components/FlatPictures';
import FlatDescription from '../components/FlatDescription';
import FlatRating from '../components/FlatRating';
import FlatTitle from '../components/FlatTitle';
import Tags from '../components/Tags';

function FlatOverview() {
  // Extract the flat ID from the URL params
  const { id } = useParams();

  // State to store the flat data
  const [flat, setFlat] = useState(null);

  // Fetch flat data based on the ID when the component mounts or ID changes
  useEffect(() => {
    // Fetch the JSON data containing flats
    fetch("/src/datas/logements.json")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // Find the flat that matches the current ID
        const selectedFlat = data.find((flat) => flat.id === id);
        setFlat(selectedFlat); // Set the selected flat to state
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle fetch errors
  }, [id]); // Re-run when the ID changes

  // If the flat data hasn't been loaded, show a loading message
  if (!flat) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flat-overview">
      <div className="container">
        <div className="content">
          {/* Display flat pictures */}
          <FlatPictures pictures={flat.pictures} />

          <header>
            <div className="titles-and-tags">
              {/* Display the flat title and location */}
              <FlatTitle title={flat.title} location={flat.location} />
              {/* Display the flat tags dynamically */}
              <Tags tags={flat.tags} />
            </div>

            {/* Display the flat rating and host details */}
            <FlatRating rating={flat.rating} host={flat.host} />
          </header>

          {/* Display the flat description and equipment */}
          <FlatDescription description={flat.description} equipments={flat.equipments} />
        </div>
      </div>
    </section>
  );
}

export default FlatOverview;