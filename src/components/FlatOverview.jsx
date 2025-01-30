import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FlatPictures from '../components/FlatPictures';
import Dropdown from "../components/Dropdown"; // Import Dropdown component for reusable dropdowns
import FlatRating from '../components/FlatRating';
import FlatTitle from '../components/FlatTitle';
import Tags from '../components/Tags';
import PageNotFound from './PageNotFound'; // Make sure to import the 404 page

function FlatOverview() {
  // Extract the flat ID from the URL params
  const { id } = useParams();

  // State to store the flat data
  const [flat, setFlat] = useState(null);
  const [isNotFound, setIsNotFound] = useState(false); // State to handle 404 error

  // Fetch flat data based on the ID
  useEffect(() => {
    // Fetch the JSON data containing flats
    fetch("/src/datas/logements.json")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        // Find the flat that matches the current ID
        const selectedFlat = data.find((flat) => flat.id === id);
        if (selectedFlat) {
          setFlat(selectedFlat); // If found, update the state with the flat data
        } else {
          setIsNotFound(true); // If not found, mark as not found
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsNotFound(true); // If there's an error with the fetch, show 404
      });
  }, [id]); // Re-run when the ID changes

  // If the flat ID is not found or if there's an error, show the 404 page
  if (isNotFound) {
    return <PageNotFound />;
  }

  // If the flat data hasn't been loaded yet, show "Loading..."
  if (!flat) {
    return <p>Loading...</p>;
  }

  // Display the flat details
  return (
    <section className="flat-overview">
      <div className="container">
        <div className="content">
          {/* Display the flat pictures */}
          <FlatPictures pictures={flat.pictures} />

          <header>
            <div className="titles-and-tags">
              {/* Display the flat title and location */}
              <FlatTitle title={flat.title} location={flat.location} />
              {/* Display the flat tags */}
              <Tags tags={flat.tags} />
            </div>

            {/* Display the flat rating and host details */}
            <FlatRating rating={flat.rating} host={flat.host} />
          </header>

          <section className="flat-infos">
            <div className="content">
              {/* Dropdown for displaying the description */}
              <Dropdown title="Description" content={flat.description} />

              {/* Dropdown for displaying the equipment list */}
              <Dropdown
                title="Equipments"
                content={
                  flat.equipments && flat.equipments.length > 0
                    ? flat.equipments // Pass the equipment list directly (array of strings)
                    : ["No equipment available"] // If no equipment, show a default message
                }
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default FlatOverview;