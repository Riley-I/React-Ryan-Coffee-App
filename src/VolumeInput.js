// VolumeInput.js
import React from 'react';

function VolumeInput({ volumeH20, setVolumeH20, onBrew }) {
  return (
    <div id="input-container">
      <label htmlFor="volumeH20">Enter water volume (Litres):</label>
      <input
        type="number"
        id="volumeH20"
        value={volumeH20}
        min="0"
        step="0.1"
        onChange={(e) => setVolumeH20(parseFloat(e.target.value))}
        placeholder="e.g., 0.5"
      />
      <button onClick={onBrew}>Brew It!</button>
    </div>
  );
}

export default VolumeInput;
