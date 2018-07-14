import React from 'react';
import styled from 'react-emotion';

const VenueCard = styled('div')`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 10px 10px 40px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const Title = styled('h2')`
  position: relative;
  color: #00287c;
  font-family: 'Racing Sans One', cursive;
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
    background-color: #00287c;
    transform: translateX(50%);
  }
`;

const CategoryAndAddress = styled('p')`
  color: #00287c;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

const Tip = styled('p')`
  color: #00287c;
  font-style: italic;
  font-size: 18px;
  padding: 10px 0;
  text-align: center;
`;

const LinkArea = styled('div')`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
`;

const LearnMoreLink = styled('a')`
  display: block;
  width: 100%;
  color: #00287c;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
  border-radius: 3px;

  &:hover,
  &:focus {
    color: white;
    background-color: #008a62;
  }
`;

const Venue = props => {
  return (
    <VenueCard>
      <Title>{props.venue.venue.name}</Title>
      <CategoryAndAddress>
        {props.venue.venue.categories[0].name} -{' '}
        {props.venue.venue.location.address}
      </CategoryAndAddress>
      <Tip>“{props.venue.tips[0].text}”</Tip>
      <LinkArea>
        {props.venue.venue.url && (
          <LearnMoreLink href={props.venue.venue.url} target="_blank">
            Learn more →
          </LearnMoreLink>
        )}
      </LinkArea>
    </VenueCard>
  );
};

export default Venue;
