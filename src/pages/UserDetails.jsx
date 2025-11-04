import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../hooks/useFetch';

function UserDetails() {
  const { id } = useParams();
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="bg-light py-5">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
          <p className="mt-3 text-muted">Pobieranie danych użytkownika...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary mb-3">Szczegóły użytkownika</h1>
          <p className="lead text-muted">ID: {id}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">{user.name}</h3>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <h5 className="text-primary">Informacje podstawowe</h5>
                    <ul className="list-unstyled">
                      <li><strong>Username:</strong> {user.username}</li>
                      <li><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></li>
                      <li><strong>Phone:</strong> {user.phone}</li>
                      <li><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-primary">Adres</h5>
                    {user.address && (
                      <ul className="list-unstyled">
                        <li><strong>Ulica:</strong> {user.address.street}</li>
                        <li><strong>Suite:</strong> {user.address.suite}</li>
                        <li><strong>Miasto:</strong> {user.address.city}</li>
                        <li><strong>Kod pocztowy:</strong> {user.address.zipcode}</li>
                        {user.address.geo && (
                          <li><strong>Współrzędne:</strong> {user.address.geo.lat}, {user.address.geo.lng}</li>
                        )}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <h5 className="text-primary">Firma</h5>
                    {user.company && (
                      <ul className="list-unstyled">
                        <li><strong>Nazwa:</strong> {user.company.name}</li>
                        <li><strong>Catch Phrase:</strong> <em>{user.company.catchPhrase}</em></li>
                        <li><strong>BS:</strong> {user.company.bs}</li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <a href="/lab5" className="btn btn-secondary">← Powrót do listy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
