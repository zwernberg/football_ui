import React from 'react';
import { Grid, Container } from 'semantic-ui-react'

const Team = (props) => {
  const { team: {location, nickname, primaryOwner}, totalPointsLive: points} = props;
  return (
    <Grid.Row>
      <Grid.Column>
        <Grid.Row textAlign='center'>
          {`${location} ${nickname} (${primaryOwner})`}
        </Grid.Row>
        <Grid.Row textAlign='center'>
          {points}
        </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  )
};

export default Team;
