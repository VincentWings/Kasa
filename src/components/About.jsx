import Dropdown from "../components/Dropdown"; // Import the Dropdown component
import BannerImage from "../components/BannerImage"; // Import the BannerImage component

function About() {
  return (
    <section className="section-about"> {/* Section to wrap all content of the About page */}
      <BannerImage /> {/* Render the BannerImage component */}
      <div className="container"> {/* Container to hold content */}
        <div className="content"> {/* Content section */}
          {/* Create several Dropdown components, each with a different title and content */}
          <Dropdown title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.." />
          <Dropdown title="Engagement" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.." />
          <Dropdown title="Innovation" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
      </div>
    </section>
  );
}

export default About; // Export the About component