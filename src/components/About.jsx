import React from "react"; // Import React library
import Dropdown from "../components/Dropdown"; // Import the Dropdown component
import BannerImage from "../components/BannerImage"; // Import the BannerImage component

function About() {
  return (
    <section className="section-about"> {/* Section to wrap all content of the About page */}
      <BannerImage /> {/* Render the BannerImage component */}
      <div className="container"> {/* Container to hold content */}
        <div className="content"> {/* Content section */}
          {/* Create several Dropdown components, each with a different title and content */}
          <Dropdown title="Fiabilité" content="Nous garantissons des services fiables et sécurisés." />
          <Dropdown title="Respect" content="Le respect de nos clients et partenaires est une priorité." />
          <Dropdown title="Engagement" content="Nous nous engageons à fournir une qualité irréprochable." />
          <Dropdown title="Innovation" content="L'innovation est au cœur de notre mission." />
        </div>
      </div>
    </section>
  );
}

export default About; // Export the About component