import React, { useState, useEffect } from 'react';
import { Header, Table, Label } from 'semantic-ui-react'

const Team = (props) => {
  const { playoffSeed, points, primaryOwner, name, record: {wins, losses, ties,} } = props;
  return (
    <Table.Row>
    <Table.Cell>
      <Label ribbon>{playoffSeed}</Label>
    </Table.Cell>
    <Table.Cell>{name}</Table.Cell>
    <Table.Cell>{primaryOwner}</Table.Cell>
    <Table.Cell>{wins}</Table.Cell>
    <Table.Cell>{losses}</Table.Cell>
    <Table.Cell>{ties}</Table.Cell>
  </Table.Row>
  )
};

export default Team;