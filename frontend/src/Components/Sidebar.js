import React from 'react';

const Sidebar = ({ uploads }) => {
    return (
        <div className="sidebar" style={{ maxHeight: '100%', overflowY: 'scroll', padding: '1rem', border: '1px solid #ddd' }}>
            <h2>New Spots</h2>
            <div className="spot-list">
                {uploads.map((upload, index) => (
                    <div key={index} className="spot-box" style={{ marginBottom: '1rem' }}>
                        <div
                            className="spot-header"
                            style={{
                                padding: '0.5rem',
                                backgroundColor: '#a60a1f',  // Red background for title
                                color: 'white',
                                fontWeight: 'bold',
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px',
                            }}
                        >
                            {upload.spotName}
                        </div>
                        <div
                            className="spot-body"
                            style={{
                                padding: '1rem',
                                backgroundColor: '#f1f1f1',  // Grey background for the body
                                borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px',
                            }}
                        >
                            <p><strong>Contact Name:</strong> {upload.contactName}</p>
                            <p><strong>Description:</strong> {upload.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Hardcoded uploads
const uploads = [
    { spotName: 'Merchants Quay', description: 'Right beside the central quay...', contactName: 'Alice', contactEmail: 'alice@example.com', contactNumber: '987654321', location: { lat: 40.785091, lng: -73.968285 } },
    { spotName: 'Opposite Lidl', description: 'Opposite the Lidl on Talbot Str...', contactName: 'Bob', contactEmail: 'bob@example.com', contactNumber: '123123123', location: { lat: 37.819929, lng: -122.478255 } },
    { spotName: 'Dawson Street', description: 'Central Location. Use the Lockbox..', contactName: 'Claire', contactEmail: 'claire@example.com', contactNumber: '456456456', location: { lat: 48.858844, lng: 2.294351 } },
    { spotName: 'Stephens Green', description: 'Right beside the Luas. I am avail..', contactName: 'Claire', contactEmail: 'claire@example.com', contactNumber: '456456456', location: { lat: 48.858844, lng: 2.294351 } },
    // Add 17 more spots here...
    ...Array.from({ length: 16 }, (_, i) => ({
        spotName: `Spot ${i + 4}`,
        description: `Description ${i + 4}`,
        contactName: `Contact ${i + 4}`,
        contactEmail: `contact${i + 4}@example.com`,
        contactNumber: `${i + 1000}`,
        location: { lat: 10 + i, lng: 20 + i },
    }))
];

export default function App() {
    return (
        <Sidebar uploads={uploads} />
    );
}
