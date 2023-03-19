// SuggestionsList.js
import React from 'react';
import './SuggestionsList.css';

const SuggestionsList = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className={`suggestions-list ${suggestions.length > 0 ? 'visible' : ''}`}>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="suggestion-item" onClick={() => onSuggestionClick(suggestion)}>
          <img
            src={suggestion.image}
            alt={suggestion.name}
            className="suggestion-image"
          />
          <span className="suggestion-name">{suggestion.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SuggestionsList;
