import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from '../hooks/useFetch';

function PostComments() {
  const { id } = useParams();
  const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const [comments] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

  if (!post || Object.keys(post).length === 0 || comments.length === 0) {
    return (
      <div className="bg-light py-5">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Ładowanie...</span>
          </div>
          <p className="mt-3 text-muted">Pobieranie komentarzy...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary mb-3">Komentarze do postu</h1>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col-md-10">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">{post.title}</h4>
              </div>
              <div className="card-body">
                <p className="lead">{post.body}</p>
                <small className="text-muted">Post ID: {post.id} | User ID: {post.userId}</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-10">
            <h3 className="mb-4">Komentarze ({comments.length})</h3>
            
            <div className="list-group">
              {comments.map((comment) => (
                <div key={comment.id} className="list-group-item list-group-item-action mb-3 shadow-sm">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 text-primary">{comment.name}</h5>
                    <small className="text-muted">ID: {comment.id}</small>
                  </div>
                  <p className="mb-2">{comment.body}</p>
                  <small className="text-muted">
                    <i className="bi bi-envelope"></i> Autor: <a href={`mailto:${comment.email}`}>{comment.email}</a>
                  </small>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a href="/lab5" className="btn btn-secondary">← Powrót do listy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostComments;
