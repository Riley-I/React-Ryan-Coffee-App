import React from 'react';

function CoffeeCup({ volumeH20 }) {
  const fillHeight = Math.min(volumeH20 * 100, 100);
  
  return (
    <div id="coffee-cup">
      <div id="coffee-fill" style={{ height: `${fillHeight}%` }}></div>
    </div>
  );
}

export default CoffeeCup;