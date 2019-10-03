import React, { useState, useEffect } from 'react';

import Division from './components/division';
import { Divider } from 'semantic-ui-react'

import logo from './logo.svg';
import './App.css';
const App = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        'https://schumacher.football/api/standings',
      );

      setData(await result.json());
    };
    fetchData();
  }, []);

  if (!data.divisions) {
    return null;
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          data.divisions.map((division, index) => {
            return (
            <>
              <Division {...division} />
              <Divider />
            </>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
