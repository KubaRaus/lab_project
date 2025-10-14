import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from 'react-router';
import { people } from '../module-data.js';
import ProfileCard from '../components/ProfileCard';

function Lab02() {
  const { id } = useParams();
  
  // Check if ID parameter is missing
  if (!id) {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 text-warning mb-4">Uwaga</h1>
            <p className="lead text-muted">
              Brak identyfikatora osoby.
            </p>
            <p className="text-muted">
              Aby wyświetlić profil osoby, podaj identyfikator w URL: <code>/lab02/[id]</code>
            </p>
            <Link to="/lab01" className="btn btn-primary mt-3">
              Powrót do listy
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Find the person with the matching id
  const person = people.find(p => p.id === parseInt(id));

  // If person not found, show error message
  if (!person) {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center">
            <h1 className="display-3 text-danger mb-4">Błąd</h1>
            <p className="lead text-muted">
              Nie znaleziono osoby o tym identyfikatorze.
            </p>
            <p className="text-muted">
              Podany identyfikator: <strong className="text-danger">{id}</strong>
            </p>
            <div className="mt-4">
              <Link to="/lab01" className="btn btn-primary me-2">
                Powrót do listy
              </Link>
              <Link to="/home" className="btn btn-secondary">
                Strona główna
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Display person details
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-3 text-primary mb-4">Profil Osoby</h1>
          <p className="lead text-muted">
            Szczegóły osoby o ID: <span className="badge bg-primary">{id}</span>
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ProfileCard 
              name={person.name}
              email={person.email}
              birthDate={person.birthDate}
              phone={person.phone}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <Link to="/lab01" className="btn btn-secondary me-2">
            ← Powrót do listy wszystkich osób
          </Link>
          <Link to="/home" className="btn btn-outline-secondary">
             Strona główna
          </Link>
        </div>
        
        {/* Navigation to other profiles */}
        <div className="text-center mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nawigacja między profilami</h5>
              <div className="btn-group" role="group">
                {parseInt(id) > 1 && (
                  <Link 
                    to={`/lab02/${parseInt(id) - 1}`} 
                    className="btn btn-outline-primary"
                  >
                    ← Poprzedni profil
                  </Link>
                )}
                {parseInt(id) < people.length && (
                  <Link 
                    to={`/lab02/${parseInt(id) + 1}`} 
                    className="btn btn-outline-primary"
                  >
                    Następny profil →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lab02;
