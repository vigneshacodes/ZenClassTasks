import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Datascience from './Pages/Datascience';
import Cybersecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import Fullstack from './Pages/Fullstack';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div>
      <ul className="nav justify-content-center links-style">
  <li class="nav-item">
    <Link className="nav-link active" aria-current="page" to="/"><p className='w-100 text-align-center'>All</p></Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/full-stack-development"><p className='w-100 text-align-center'>Full Stack Development</p></Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/data-science"><p className='w-100 text-align-center'>Data Science</p></Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/cyber-security"><p className='w-100 text-align-center'>Cyber Security</p></Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/career"><p className='w-100 text-align-center'>Career</p></Link>
  </li>
</ul>
      </div>
      <hr/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/full-stack-development' Component={Fullstack} />
        <Route path='/data-science' Component={Datascience} />
        <Route path='/cyber-security' Component={Cybersecurity} />
        <Route path='/career' Component={Career} />
      </Routes>
    </div>
  );
}

export default App;
