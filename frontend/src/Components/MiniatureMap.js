import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

class Map extends React.Component {
  componentDidMount() {
    Radar.initialize('prj_test_pk_a38604f904532778b141e186b60184e3502a5e68');

    // Create the Radar map
    const map = Radar.ui.map({
      container: 'map',
      style: 'radar-default-v1',
      center: [-6.2603, 53.3498], // Example coordinates for Dublin
      zoom: 14,
    });

    // Add a click event listener to the map
    map.on('click', (event) => {
      const { lng, lat } = event.lngLat;

      // Create GeoJSON point
      const geojsonPoint = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
      };

      console.log('Clicked GeoJSON Point:', geojsonPoint);

      // Pass the GeoJSON point to the parent component via the onMapClick prop
      if (this.props.onMapClick) {
        this.props.onMapClick(geojsonPoint);
      }
    });
  }

  render() {
    return (
      <div id="map-container" style={{ width: '100%', height: '400px' }}>
        <div id="map" style={{ height: '100%', width: '100%' }} />
      </div>
    );
  }
}

export default Map;