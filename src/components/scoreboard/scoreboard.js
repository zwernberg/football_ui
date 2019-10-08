import React from 'react';
import { useAPI } from 'react-api-hooks';

import Division from './division';
import { Divider } from 'semantic-ui-react'

const Scoreboard = () => {
  
  const { data=[], error, isLoading } = useAPI('https://schumacher.football/api/scoreboard');
  
  if (error){
    return  ('error')
  }
          
  if (isLoading){
    return ('loading...')
  }
  return (
    <div className="scoreboard">
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
    </div>
  );
}

export default Scoreboard;
