import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileCardLab3 from '../components/ProfileCardLab3';
import MyContainer from '../components/MyContainer';

function Lab3Page() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-3 text-primary mb-4">Laboratorium 3</h1>
          <p className="lead text-muted">
            Nowy komponent profilu osoby
          </p>
        </div>

        <MyContainer element={ProfileCardLab3} />
      </div>
    </div>
  );
}

export default Lab3Page;
