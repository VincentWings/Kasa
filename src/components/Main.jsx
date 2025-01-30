import { Outlet } from "react-router-dom"; // Outlet is used to render nested routes

// Main component is the layout for the app, which holds other pages
function Main() {
  return (
    <main>
      {/* Outlet will render the nested route components inside Main */}
      <Outlet />
    </main>
  );
}

export default Main; // Export the Main component for use in other parts of the app
