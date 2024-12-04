import React, { useState } from 'react';
import Map from './MiniatureMap';

const CreateSpot = () => {
    const [spotName, setSpotName] = useState('');
    const [description, setDescription] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [location, setLocation] = useState(null); // Store GeoJSON point here

    const handleMapClick = (geojsonPoint) => {
        setLocation(geojsonPoint);
    };

    const handleSubmit = (event) => {
        if (!spotName || !description || !contactName || !contactEmail || !contactNumber || !location) {
            alert('Please fill in all fields and select a location on the map.');
            return;
        }
        event.preventDefault();
        const formData = {
            spotName,
            description,
            contactName,
            contactEmail,
            contactNumber,
            location
        };
        console.log('Form Data:', formData);
    };
    


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Spot Name:</label>
                <input
                    type="text"
                    value={spotName}
                    onChange={(e) => setSpotName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Short Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contact Name:</label>
                <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contact Email:</label>
                <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Contact Number:</label>
                <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                />
            </div>
            <div>
            <label>Location:</label>
                <label>Location:</label>
                <div id="map" style={{ height: '400px', width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <Map onMapClick={handleMapClick} />
                </div>
                {location && (
                    <p>
                        Selected Location: {location.geometry.coordinates[1]},{' '}
                        {location.geometry.coordinates[0]}
                    </p>
                )}
            </div>
            <button type="submit">Create Spot</button>
        </form>
    );
};

export default CreateSpot;