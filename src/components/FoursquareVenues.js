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
      `https://api.foursquare.com/v2/venues/explore?ll=${this.props.lat},${
        this.props.lng
      }&oauth_token=T0LH2QQ01BSRC0OYQFB5L3C50MPPJ5YVXUFZHDWKCTPAY4YB&v=20180712`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        // Only get the data that is needed for venyen
        const foursquareData = data.response.groups[0].items;
        const venyenData = foursquareData.map(venue => {
          const defaultTip = "You'll have to check it out for yourself!";
          const tip =
            typeof venue.tips === 'undefined' ? defaultTip : venue.tips[0].text;
          return {
            id: venue.venue.id,
            name: venue.venue.name,
            category: venue.venue.categories[0].name,
            address: venue.venue.location.address,
            tip,
            link: venue.venue.url
          };
        });

        this.setState({ venues: venyenData });
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
