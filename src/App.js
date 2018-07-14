import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import Search from './components/Search';
import FoursquareVenues from './components/FoursquareVenues';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html {
    overflow: hidden;
    height: 100%;
    background-image: linear-gradient(to right bottom, #3d8cf5, #00a2f5, #00b1de, #00bbba, #2bc194);
  }
  body {
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;

    @import url('https://fonts.googleapis.com/css?family=Racing+Sans+One');
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <FoursquareVenues />
      </React.Fragment>
    );
  }
}

export default App;
