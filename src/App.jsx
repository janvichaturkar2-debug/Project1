import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login.jsx'
import Regsister from './pages/page1/regsister.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState('register');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {currentPage === 'register' && <Regsister/>}
      {currentPage === 'login' && (isLoggedIn ? (
        <h1>Welcome, User!</h1>
      ) : (
       <Login onLogin={() => setIsLoggedIn(true)}/> 
      ))}
    </div>
  )
}

export default App;

 {/*<div className="App">
      {!isRegistered ? (
        // Show registration first
        <P1 onRegister={() => setIsRegistered(true)} onAlreadyRegistered={() => setIsRegistered(true)} />
      ) : !isLoggedIn ? (
        // After registration, show login
        <Login onLogin={() => setIsLoggedIn(true)} onNewUser={() => setIsRegistered(false)} />
      ) : (
        // After login, show welcome
        <h1>Welcome, User!</h1>
      )}
    </div>*/}