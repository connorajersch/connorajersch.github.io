import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";

import React from 'react';

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='experience' element={<Experience />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
