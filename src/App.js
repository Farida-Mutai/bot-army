import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'; // Import CSS for overall styling

function App() {
  const [army, setArmy] = useState([]);

  const handleEnlist = (bot) => {
    setArmy([...army, bot]);
  };

  const handleRelease = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const handleDischarge = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));

    // Delete bot from db.json (backend)
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    });
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection 
        onEnlist={handleEnlist} 
        army={army} 
        onRelease={handleRelease} 
        onDischarge={handleDischarge} 
      />
      <YourBotArmy 
        army={army} 
        onRelease={handleRelease} 
        onDischarge={handleDischarge} 
      />
    </div>
  );
}

export default App;
