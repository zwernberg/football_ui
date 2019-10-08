import React, { useState } from 'react';
import { useRoutes } from 'hookrouter';
import { Menu } from 'semantic-ui-react'
import Routes from './router'

import './App.css';
const App = () => {

  const routeResult = useRoutes(Routes)
  const [active, setActive] = useState('scoreboard');

  const handleItemClick = (e, { name }) => setActive(name);


  return (
    <div className="App">
      {/* <A href="/scoreboard">Scoreboard</A><br />
      <A href="/standings">Standings</A> */}

      <Menu fixed='top' pointing>
      <Menu.Item>
          Schumacher Football
        </Menu.Item>
      <Menu.Item href="/scoreboard" as='A'>Scoreboard</Menu.Item>
      <Menu.Item href="/standings" as='A'>Standings</Menu.Item>
      </Menu>
      <br />
      <br />
      <br />
      {routeResult}
    </div>
  )
};

export default App;
