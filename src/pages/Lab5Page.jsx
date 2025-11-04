import { useState, useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Badge } from 'react-bootstrap';
import { Link } from 'react-router';
import useFetch from '../hooks/useFetch';
import TableHeader from '../components/TableHeader';
import TableDataReducer from '../data/TableDataReducer';

function Lab5Page() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  
  const [state, dispatch] = useReducer(TableDataReducer, {
    data: [],
    originalData: [],
    sortConfig: { column: null, direction: 'natural' }
  });

  // Tworzenie tableData z pobranych danych
  useEffect(() => {
    if (posts.length > 0 && users.length > 0 && comments.length > 0) {
      const tableData = posts.map((p) => {
        return {
          user: users.find((u) => u.id === p.userId),
          post: p,
          comments: comments.filter((c) => c.postId === p.id),
        };
      });
      
      dispatch({ type: 'SET_DATA', payload: tableData });
    }
  }, [posts, users, comments]);

  const handleSort = (column, direction) => {
    switch (direction) {
      case 'asc':
        dispatch({ type: 'SORT_ASC', column });
        break;
      case 'desc':
        dispatch({ type: 'SORT_DESC', column });
        break;
      case 'natural':
        dispatch({ type: 'SORT_NATURAL' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary mb-3">Lab 5 - Pobieranie danych</h1>
          <p className="lead text-muted">
            Dane pobrane z JSONPlaceholder API za pomocą własnego hooka <code>useFetch</code>
          </p>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">Posts</h5>
                <p className="display-4">{posts.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">Users</h5>
                <p className="display-4">{users.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-warning">Comments</h5>
                <p className="display-4">{comments.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Posty z użytkownikami i komentarzami</h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <TableHeader 
                      label="User" 
                      onSort={(direction) => handleSort('user', direction)} 
                    />
                    <TableHeader 
                      label="Post title" 
                      onSort={(direction) => handleSort('post', direction)} 
                    />
                    <TableHeader 
                      label="Comments count" 
                      onSort={(direction) => handleSort('comments', direction)} 
                    />
                  </tr>
                </thead>
                <tbody>
                  {state.data.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <Link 
                          to={`/lab5/users/${item.user?.id}`}
                          className="text-decoration-none fw-bold"
                        >
                          {item.user?.name || 'Loading...'}
                        </Link>
                      </td>
                      <td>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              {item.post.title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="mb-0">{item.post.body}</p>
                              <small className="text-muted">Post ID: {item.post.id}</small>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </td>
                      <td className="text-center">
                        <Link 
                          to={`/lab5/posts/${item.post.id}/comments`}
                          className="text-decoration-none"
                        >
                          <Badge bg="success" className="p-2" style={{ cursor: 'pointer' }}>
                            {item.comments.length} komentarzy
                          </Badge>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {state.data.length === 0 && (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Ładowanie...</span>
            </div>
            <p className="mt-3 text-muted">Pobieranie danych z API...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lab5Page;
