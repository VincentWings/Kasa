import { useLocation } from "react-router-dom"; // Import useLocation hook to get the current URL
import Navbar from "./Navbar"; // Import Navbar component to display the top navigation bar
import Banner from "./Banner"; // Import Banner component to display a special banner on the homepage
import Main from "./Main"; // Import Main component where the main content is displayed
import Footer from "./Footer"; // Import Footer component to display the bottom part of the page

// App component is the main layout of the application
function App() {
  // useLocation hook provides information about the current URL
  const location = useLocation();

  return (
    <>
      {/* Display Navbar at the top of every page */}
      <Navbar />
      
      {/* Only display Banner on the homepage (path = '/') */}
      {location.pathname === "/" && <Banner />}
      
      {/* Main component contains the main content of the page */}
      <Main />
      
      {/* Display Footer at the bottom of every page */}
      <Footer />
    </>
  );
}

export default App; // Export the App component to use it elsewhere in the app