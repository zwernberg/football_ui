import React, { useState, useEffect } from 'react';
import { useAPI } from 'react-api-hooks';

import Division from './division';
import { Divider } from 'semantic-ui-react'

const Standings = () => {
  
  const { data=[], error, isLoading } = useAPI('https://schumacher.football/api/standings');
  
  if (error){
    return  ('error')
  }
          
  if (isLoading){
    return ('loading...')
  }
  return (
    <div className="standings">
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

export default Standings;
