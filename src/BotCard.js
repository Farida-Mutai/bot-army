import React from 'react';
import './BotCard.css'; // Import CSS for styling

function BotCard({ bot, onEnlist, onRelease, onDischarge, inArmy }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <p>Type: {bot.type}</p>
      <p>Health: {bot.health}</p>
      <button onClick={() => inArmy ? onRelease(bot.id) : onEnlist(bot)} disabled={inArmy}>
        {inArmy ? 'Release' : 'Enlist'}
      </button>
      {inArmy && <button className="discharge-btn" onClick={() => onDischarge(bot.id)}>x</button>}
    </div>
  );
}

export default BotCard;
