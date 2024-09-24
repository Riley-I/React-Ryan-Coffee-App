// App.js
import React, { useState } from 'react';
import CoffeeCup from './CoffeeCup';
import VolumeInput from './VolumeInput';
import RecentRatios from './RecentRatios';
import Notification from './Notification';
import Popup from './Popup';
import './App.css';

function App() {
  const [volumeH20, setVolumeH20] = useState(0);
  const [recentRatios, setRecentRatios] = useState([]);
  const [notification, setNotification] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [gramsGrinds, setGramsGrinds] = useState(0); // Add this state for coffee grams

  const handleBrew = () => {
    if (volumeH20 <= 0) {
      alert('Please enter a valid volume.');
      return;
    }

    const grams = (60 * volumeH20).toFixed(2); // Calculate grams based on water volume
    setGramsGrinds(grams); // Store the calculated grams for display

    setNotification(volumeH20 <= 0.5 ? 'Use Half Speed! 🌱' : 'Full Speed Ahead! 🚀');
    addRecentRatio(volumeH20);
    showPopup();
  };

  const addRecentRatio = (volume) => {
    if (!recentRatios.includes(volume)) {
      setRecentRatios([volume, ...recentRatios.slice(0, 4)]);
    }
  };

  const showPopup = () => {
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 5000);
  };

  return (
    <div className="App">
      <h1>Ryan's Coffee Stuff ☕</h1>
      <VolumeInput volumeH20={volumeH20} setVolumeH20={setVolumeH20} onBrew={handleBrew} />
      <CoffeeCup volumeH20={volumeH20} />
      <Notification message={notification} />
      <div id="result">You need {gramsGrinds} grams of coffee grounds.</div> {/* Display coffee grams */}
      <RecentRatios ratios={recentRatios} onSelect={setVolumeH20} />
      <Popup visible={popupVisible} />
    </div>
  );
}

export default App;
