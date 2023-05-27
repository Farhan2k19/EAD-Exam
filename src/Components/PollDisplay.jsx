import React from 'react';
import UserParticipation from './UserParticipation';
import { useState } from 'react';
import AnotherUserParticipation from './AnotherUserParticipation';
function PollDisplay({}) {
  const question = "What is your favorite programming language?";
  const choicesArray = [
    { "id": 1, "label": "JavaScript", "votes": 0 },
    { "id": 2, "label": "Python", "votes": 0 },
    { "id": 3, "label": "Java", "votes": 0 },
    { "id": 4, "label": "C#", "votes": 0 }
  ];

  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceSelect = (choiceId) => {
    setSelectedChoice(choiceId);
  };
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {choicesArray.map((choice) => (
          <li key={choice.id}>
            {choice.label}: {choice.votes} Votes
          </li>
        ))}
      </ul>

     
    
      <UserParticipation choicesArray={choicesArray} />
      <AnotherUserParticipation choicesArray={choicesArray} setSelectedChoice/>

    </div>
  );
}

export default PollDisplay;
