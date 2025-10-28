import { useState, useReducer } from 'react'
import { Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import Lab3Page from './pages/Lab3Page';
import Lab4Page from './pages/Lab4Page';
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';
import NotFound from './pages/NotFound';
import AppContext from './data/AppContext';
import AppReducer from './data/AppReducer';
import { people } from './module-data';

function App() {
  const [state, appDispatch] = useReducer(AppReducer, people);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab3" element={<Lab3Page />} />
          <Route path="lab4" element={<Lab4Page />} />
          <Route path="lab4/add" element={<AddForm />} />
          <Route path="lab4/edit/:id" element={<EditForm />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  )
}

export default App
