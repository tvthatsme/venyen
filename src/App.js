import React, { Component } from 'react';
import { injectGlobal } from 'emotion';
import Search from './components/Search';
import FoursquareVenues from './components/FoursquareVenues';
import GeoLocation from './components/GeoLocation';

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
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <GeoLocation
          render={(lat, lng) => {
            return <FoursquareVenues lat={lat} lng={lng} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default App;
