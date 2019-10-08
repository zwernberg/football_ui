import React, { useState, useEffect } from 'react';
import { Header, Container, Table } from 'semantic-ui-react'

import Matchup from './matchup';


const Division = (props) => {
  const { name, schedule } = props;
  return (
    <div>
      <Container>
        <Header as='h1'>{name}</Header>
            {schedule.map((matchup) => {
              return <Matchup {...matchup} />
            })}
      </Container>

    </div>
  )
};

export default Division;
