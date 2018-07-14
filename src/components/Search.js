import React, { Component } from 'react';
import styled from 'react-emotion';

const SearchBar = styled('div')`
  display: flex;
  justify-content: center;
  max-width: calc(100vw - 20px);
  margin: 20px auto 0;
  padding: 15px 0;
  text-align: center;
`;

const Text = styled('h1')`
  display: inline-block;
  font-size: 35px;
  line-height: 40px;
  font-weight: bold;
  color: white;
  margin: 0;
  padding: 0;
`;

/**
 * Responsible for showing the search and, in the future, letting
 * the user adjust the search criteria
 */
class Search extends Component {
  render() {
    return (
      <SearchBar>
        <Text>Searching for all venues around your current location</Text>
      </SearchBar>
    );
  }
}

export default Search;
