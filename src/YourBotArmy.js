import React from 'react';
import BotCard from './BotCard'; // Correct path
import './YourBotArmy.css';


function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      {army.length === 0 ? (
        <p>No bots in your army</p>
      ) : (
        army.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onRelease={onRelease} 
            onDischarge={onDischarge} 
            inArmy={true} 
          />
        ))
      )}
    </div>
  );
}

export default YourBotArmy;
