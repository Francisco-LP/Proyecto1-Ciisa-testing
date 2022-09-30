import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './components/navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}

export default App;
