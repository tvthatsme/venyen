import React, { Component } from 'react';
import styled from 'react-emotion';

const fontSize = 35;

const SearchBar = styled('div')`
  display: flex;
  justify-content: center;
  max-width: calc(100vw - 20px);
  margin: 20px auto 0;
  padding: 15px 0;
  text-align: center;
`;

const Text = styled('p')`
  display: inline-block;
  font-size: ${fontSize}px;
  line-height: ${fontSize + 5}px;
  font-weight: bold;
  color: white;
  margin: 0;
  padding: 0;
`;

const Selections = styled('a')`
  display: inline-block;
  font-size: ${fontSize}px;
  line-height: ${fontSize + 5}px;
  font-weight: bold;
  color: white;
  margin: 0 10px;
  padding: 0 5px;

  &:hover {
    background-color: #008a62;
  }
`;

/**
 * Responsible for showing the search and, in the future, letting
 * the user adjust the search criteria
 */
class Search extends Component {
  render() {
    return (
      <SearchBar>
        <div>
          <Text>Searching for all venues around your current location</Text>
          {/* In the future this can be expanded on */}
          {/* <Text>Searching for</Text>
          <Selections href="#">all venues</Selections>
          <Text>within</Text>
          <Selections href="#">50km</Selections>
          <Text>of</Text>
          <Selections href="#">my current location</Selections> */}
        </div>
      </SearchBar>
    );
  }
}

export default Search;
