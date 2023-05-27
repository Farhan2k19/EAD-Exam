import React, { useState } from 'react';

const UserParticipation = ({ choicesArray }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoice(choiceId);
  };

  const handleVoteSubmit = () => {
    if (selectedChoice !== null) {
      setHasVoted(true);
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

      {hasVoted && <ThankYouComponent />}
    </div>
  );
};

const ThankYouComponent = () => {
  return (
    <div>
      <h2>Thank You for Voting!</h2>
    </div>
  );
};

export default UserParticipation;
