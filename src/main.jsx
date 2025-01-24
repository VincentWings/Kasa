import { StrictMode } from "react"; // Ensures React best practices and warnings during development
import { createRoot } from "react-dom/client"; // React's new way to create a root for rendering
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Handles routing in the application
import "./assets/css/style.css"; // Import the main CSS file for styling

// Importing components for different parts of the app
import App from "./components/App"; // Main wrapper component
import Grid from "./components/Grid"; // Displays the grid of flats
import FlatOverview from "./components/FlatOverview"; // Detailed view of a single flat
import About from "./components/About"; // About page of the application
import PageNotFound from "./components/PageNotFound"; // Component for 404 error page

// Get the root element from the HTML where the app will be mounted
const rootElement = document.getElementById("root");

// Render the app using React's createRoot
createRoot(rootElement).render(
  <StrictMode>
    {/* BrowserRouter is used for managing routes in a React application */}
    <BrowserRouter>
      <Routes>
        {/* Define the main route structure */}
        <Route path="/" element={<App />}>
          {/* The index route renders the Grid component */}
          <Route index element={<Grid />} />
          {/* Route for viewing details of a specific flat */}
          <Route path="/flat/:id" element={<FlatOverview />} />
          {/* Route for the About page */}
          <Route path="/about" element={<About />} />
          {/* Route for the custom 404 page */}
          <Route path="/404" element={<PageNotFound />} />
          {/* Redirects all unknown paths to the 404 page */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);