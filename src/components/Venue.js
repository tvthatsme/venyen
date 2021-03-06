import React from 'react';
import styled from 'react-emotion';

const VenueCard = styled('div')`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 20px 20px 50px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: #414656;
`;

const Title = styled('h2')`
  position: relative;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 0 10px;
  padding-bottom: 10px;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: #414656;
    transform: translateX(50%);
  }
`;

const CategoryAndAddress = styled('p')`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Tip = styled('p')`
  font-style: italic;
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
`;

const LinkArea = styled('div')`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

const LearnMoreLink = styled('a')`
  display: block;
  width: 100%;
  color: #414656;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  background-color: #71faca;

  &:hover,
  &:focus {
    color: white;
    background-color: #3d8cf5;
  }
`;

/**
 * Responsible for displaying the venue information in a card format
 */
const Venue = props => {
  const { venue } = props;
  return (
    <VenueCard>
      <Title>{venue.name}</Title>
      <CategoryAndAddress>
        {venue.category} - {venue.address}
      </CategoryAndAddress>
      <Tip>“{venue.tip}”</Tip>
      <LinkArea>
        {venue.link && (
          <LearnMoreLink href={venue.link} rel="noopener" target="_blank">
            Learn more →
          </LearnMoreLink>
        )}
      </LinkArea>
    </VenueCard>
  );
};

export default Venue;
