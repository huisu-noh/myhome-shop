import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';

export default function Root() {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(['watchedItem']));
  }, []);
  return (
    <div className='App'>
      <Navigation />
      <div className='main-bg'></div>
      <Outlet />
    </div>
  );
}
