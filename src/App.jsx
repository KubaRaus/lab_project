import { useState } from 'react'
import { Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab01 from './pages/lab01';
import Lab02 from './pages/Lab02';
import Lab3Page from './pages/Lab3Page';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="lab01" element={<Lab01 />} />
          <Route path="lab02/:id" element={<Lab02 />} />
          <Route path="lab3" element={<Lab3Page />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
