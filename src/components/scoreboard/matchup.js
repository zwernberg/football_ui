import React from 'react';
import { Grid, Container } from 'semantic-ui-react'

import Team from './team';


const Matchup = (props) => {
  const { away, home } = props;
  return (
    <Container>
      <Grid stackable textAlign='center' divided='vertically'>
        <Grid.Row centered columns={2}>
          <Grid.Column>
             <Team  {...away} />
          </Grid.Column>
          <Grid.Column>
            <Team  {...home} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
      )
    };
    
    export default Matchup;
