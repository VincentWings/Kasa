import { Link } from 'react-router-dom'; // Import Link for navigation to the homepage

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="container">
        <div className="content">
          {/* Display 404 error code */}
          <h1>404</h1>

          {/* Error message */}
          <p className='warning'>Oups! La page que vous demandez n'existe pas.</p>
          
          {/* Link to go back to the homepage */}
          <p className='backtohome'>
            <Link to="/">Retourner sur la page d'accueil</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;