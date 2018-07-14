import React from 'react';
import { geolocated } from 'react-geolocated';
import styled from 'react-emotion';

const Message = styled('div')`
  font-size: 20px;
  color: white;
  text-align: center;
`;

/**
 * Responsible for getting the geolocation from the user
 */
class GeoLocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <Message>Your browser does not support Geolocation</Message>
    ) : !this.props.isGeolocationEnabled ? (
      <Message>Geolocation is not enabled</Message>
    ) : this.props.coords ? (
      // Use a render function to render whatever component needs
      // latitude and longitude information
      this.props.render(this.props.coords.latitude, this.props.coords.longitude)
    ) : (
      <Message>Getting the location data&hellip; </Message>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(GeoLocation);
