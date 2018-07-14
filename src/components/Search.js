import React, { Component } from 'react';
import styled from 'react-emotion';

const fontSize = 35;

const SearchBar = styled('div')`
  display: flex;
  justify-content: center;
  font-family: 'Racing Sans One', cursive;
  max-width: calc(100vw - 20px);
  margin: 0 auto;
  padding: 15px 0;
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
    color: #f5f9ff;
    background-color: #9b4278;
  }
`;

class Search extends Component {
  render() {
    return (
      <SearchBar>
        <div>
          <Text>Searching for</Text>
          <Selections href="#">all venues</Selections>
          <Text>within</Text>
          <Selections href="#">50km</Selections>
          <Text>of</Text>
          <Selections href="#">my current location</Selections>
        </div>
      </SearchBar>
    );
  }
}

export default Search;
