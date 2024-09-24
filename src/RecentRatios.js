// RecentRatios.js
import React from 'react';

function RecentRatios({ ratios, onSelect }) {
  return (
    <div id="recent-ratios">
      {ratios.map((ratio, index) => (
        <button key={index} className="ratio-btn" onClick={() => onSelect(ratio)}>
          {ratio} L
        </button>
      ))}
    </div>
  );
}

export default RecentRatios;
