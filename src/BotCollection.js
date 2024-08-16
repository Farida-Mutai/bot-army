import React, { useEffect, useState } from 'react';
import BotCard from './BotCard'; // Correct path
import './BotCollection.css';


function BotCollection({ onEnlist, army, onRelease, onDischarge }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/bots') // Fetch bots data from db.json
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onEnlist={onEnlist} 
          onRelease={onRelease} 
          onDischarge={onDischarge} 
          inArmy={army.some(armyBot => armyBot.id === bot.id)}
        />
      ))}
    </div>
  );
}

export default BotCollection;
