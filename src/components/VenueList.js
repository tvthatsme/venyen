import React from 'react';
import Venue from './Venue';
import styled from 'react-emotion';

const List = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 40px;
`;

const VenueList = props => {
  return (
    <List>
      {props.venues.map(venue => {
        return <Venue key={venue.venue.id} venue={venue} />;
      })}
    </List>
  );
};

export default VenueList;
