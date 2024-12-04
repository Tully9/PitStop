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

    // GeoJSON data (your feature collection)
    const geojsonData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.265694312009714, 53.34927774167906],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.250963198457839, 53.343935105658545],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.262130332924585, 53.345117162453334],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.271317479011003, 53.34024687783403],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.272426272504532, 53.348284913067204],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.25120079706312, 53.35272882315746],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.2699710869121645, 53.35608508644532],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.272505472039626, 53.355896008214756],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.238924869102874, 53.35755041428965],
            type: 'Point',
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [-6.2443104374989105, 53.33953756667961],
            type: 'Point',
          },
        },
      ],
    };

    // Custom icon URL (replace with your own custom icon URL from Radar dashboard)
    const customIconUrl = 'https://example.com/path/to/your/custom-icon.png'; // Use the URL of your custom icon

    // Add markers for each point in the GeoJSON
    map.on('load', () => {
      geojsonData.features.forEach((feature) => {
        // Create a custom marker for each point in the GeoJSON data
        const marker = Radar.ui.marker({
          marker: 'Icon.png', // Set the custom icon
          width: '48px',
          height: '48px',
        }).setLngLat(feature.geometry.coordinates).addTo(map);
      });
    });
  }

  render() {
    return (
      <div
        id="map-container"
        style={{ width: '80%', height: '94vh', position: 'absolute', marginLeft: '20%' }}
      >
        <div id="map" style={{ height: '100%', position: 'absolute', width: '100%' }} />
      </div>
    );
  }
}

export default Map;
