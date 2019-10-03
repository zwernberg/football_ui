import React, { useState, useEffect } from 'react';
import { Header, Container, Table } from 'semantic-ui-react'

import Team from './team';


const Division = (props) => {
  const { name, teams } = props;
  return (
    <div>
      <Container>
        <Header as='h1'>{name}</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Rank</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Wins</Table.HeaderCell>
              <Table.HeaderCell>Losses</Table.HeaderCell>
              <Table.HeaderCell>Ties</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {teams.map((team) => {
              return <Team {...team} />
            })}
          </Table.Body>
        </Table>

      </Container>

    </div>
  )
};

export default Division;
