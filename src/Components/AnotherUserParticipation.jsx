import React, { useState } from 'react';

const AnotherUserParticipation = ({ choicesArray, onResetSelectedChoice }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoice(choiceId);
  };

  const handleVoteSubmit = () => {
    if (selectedChoice !== null) {
      console.log('Selected choice:', selectedChoice);
    }
  };

  const handleAnotherUserClick = () => {
    setSelectedChoice(null); 
    onResetSelectedChoice(); 
  };

  return (
    <div>
      <h2>AnotherUserParticipation Component</h2>
      <p>Answer Choices:</p>
      <ul>
        {choicesArray.map((choice) => (
          <li key={choice.id}>
            <label>
              <input
                type="radio"
                name="choice"
                value={choice.id}
                checked={selectedChoice === choice.id}
                onChange={() => handleChoiceSelect(choice.id)}
              />
              {choice.label} (Selectable)
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleVoteSubmit}>Submit Vote</button>
      <button onClick={handleAnotherUserClick}>Another User</button>
    </div>
  );
};

export default AnotherUserParticipation;
