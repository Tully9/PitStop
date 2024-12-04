import React from 'react';
import Radar from 'radar-sdk-js';

import 'radar-sdk-js/dist/radar.css';

class Map extends React.Component {
  componentDidMount() {
    Radar.initialize('prj_test_pk_a38604f904532778b141e186b60184e3502a5e68');

    // create a map
    const map = Radar.ui.map({
      container: 'map',
      style: 'radar-default-v1',
      center: [-6.2603, 53.3498],
      zoom: 14,
    });

  }

  render() {
    return (
      <div id="map-container" style={{ width:' 80%', height: '94vh', position: 'absolute', marginLeft: '20%' }}>
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
      </div>
    );
  }
};

export default Map;