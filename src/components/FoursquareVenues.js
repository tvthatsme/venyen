import React, { Component } from 'react';
import VenueList from './VenueList';

/**
 * Responsible for getting data from Foursquare API
 */
class FoursquareVenues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.foursquare.com/v2/venues/explore?near=NYC&oauth_token=T0LH2QQ01BSRC0OYQFB5L3C50MPPJ5YVXUFZHDWKCTPAY4YB&v=20180712'
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        console.log(data.response.groups[0].items);
        this.setState({ venues: data.response.groups[0].items });
      });
  }

  render() {
    return (
      <div>
        <VenueList venues={this.state.venues} />
      </div>
    );
  }
}

export default FoursquareVenues;
