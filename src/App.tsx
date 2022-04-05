import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './components/home';
import GameScreenComponent from './components/game';
import NotificationAlerts from './app/notification';

import { ROUTES } from './common/constants';

import './App.css';

function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={ROUTES.HOME} element={<HomeComponent />} />
              <Route path={ROUTES.GAME} element={<GameScreenComponent />} />
          </Routes>
          <NotificationAlerts/>
      </div>
  );
}

export default App;
