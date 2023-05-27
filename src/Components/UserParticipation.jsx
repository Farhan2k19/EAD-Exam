import React, { useState } from 'react';
import PollDisplay from './PollDisplay';

const UserParticipation = ({ choicesArray }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoice(choiceId);
  };

  const handleVoteSubmit = () => {
    if (selectedChoice !== null) {
      const updatedChoices = choicesArray.map((choice) => {
        if (choice.id === selectedChoice) {
          return { ...choice, votes: choice.votes + 1 };
        }
        return choice;
      });

      console.log('Updated choices:', updatedChoices);
    }
  };

  return (
    <div>
      <h2>UserParticipation Component</h2>
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
    </div>
  );
};

export default UserParticipation;
