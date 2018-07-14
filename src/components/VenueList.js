import React from 'react';
import Venue from './Venue';
import styled from 'react-emotion';

const List = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
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
