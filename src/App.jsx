import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard';
import { people } from './module-data.js';

function App() {
  return (
    <>
      {people.map(person => <ProfileCard 
          key={person.id}
          name = {person.name} 
          email = {person.email} 
          birthDate = {person.birthDate} 
          phone = {person.phone}
          />)}
    </>
  )
}

export default App
