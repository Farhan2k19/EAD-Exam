import React from 'react'

function PollDisplay() {

    const question="What is your favorite programming language?";
    const choicesArray=[

    { "id": 1, "label": "JavaScript", "votes": 0 },

    { "id": 2, "label": "Python", "votes": 0 },

    { "id": 3, "label": "Java", "votes": 0 },

    { "id": 4, "label": "C#", "votes": 0 }

  ]    

     const totalVotes=choicesArray.reduce((total,choice)=>{
      return total+choice.votes;
    },0);

  return (
    <div>
        <h2>{question}</h2>
        
        <ul>
            {choicesArray.map((choice)=>{
                return <li key={choice.id}>{choice.label}{": "}{totalVotes}{"  Votes"}</li>
            }
            )}
        </ul>

      
    </div>
  )
}

export default PollDisplay
