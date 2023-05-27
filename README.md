
Farhan 

023-19-0101

BSCS 8 Section:B

<h1>TASK 01

<h1>Poll Display Component Code

importUserParticipationfrom'./UserParticipation';

import { useState } from'react';

importAnotherUserParticipationfrom'./AnotherUserParticipation';

functionPollDisplay({}) {

constquestion = "What is your favorite programming language?";

constchoicesArray = [

    { "id":1, "label":"JavaScript", "votes":0 },

    { "id":2, "label":"Python", "votes":0 },

    { "id":3, "label":"Java", "votes":0 },

    { "id":4, "label":"C#", "votes":0 }

  ];

const [selectedChoice, setSelectedChoice] = useState(null);

consthandleChoiceSelect = (choiceId) => {

setSelectedChoice(choiceId);

  };

return (

<div>

<h2>{question}</h2>

<ul>

{choicesArray.map((choice) => (

<likey={choice.id}>

{choice.label}: {choice.votes} Votes

</li>

    ))}

</ul>

<UserParticipationchoicesArray={choicesArray}/>

<AnotherUserParticipationchoicesArray={choicesArray}setSelectedChoice/>

  );

}

exportdefaultPollDisplay;

![1685189937252](image/README/1685189937252.png)

<h1>User Participation Component Code


constUserParticipation = ({ choicesArray }) => {

const [selectedChoice, setSelectedChoice] = useState(null);

const [hasVoted, setHasVoted] = useState(false);

consthandleChoiceSelect = (choiceId) => {

setSelectedChoice(choiceId);

  };

consthandleVoteSubmit = () => {

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

<likey={choice.id}>

<label>

<input

type="radio"

name="choice"

value={choice.id}

checked={selectedChoice === choice.id}

onChange={() =>handleChoiceSelect(choice.id)}

/>

{choice.label} (Selectable)

</label>

</li>

    ))}

</ul>

<buttononClick={handleVoteSubmit}>Submit Vote`</button>`

{hasVoted && `<ThankYouComponent/>`}

</div>

  );

};

constThankYouComponent = () => {

return (

<div>

<h2>Thank You for Voting!</h2>

</div>

  );

};

exportdefaultUserParticipation;

![1685190127639](image/README/1685190127639.png)




<h1>Another User Participation Component

importReact, { useState } from'react';

constAnotherUserParticipation = ({ choicesArray, onResetSelectedChoice }) => {

const [selectedChoice, setSelectedChoice] = useState(null);

consthandleChoiceSelect = (choiceId) => {

setSelectedChoice(choiceId);

  };

consthandleVoteSubmit = () => {

if (selectedChoice !== null) {

console.log('Selected choice:', selectedChoice);

    }

  };

consthandleAnotherUserClick = () => {

setSelectedChoice(null);

onResetSelectedChoice();

  };

return (

<div>

<h2>AnotherUserParticipation Component</h2>

<p>Answer Choices:</p>

<ul>

{choicesArray.map((choice) => (

<likey={choice.id}>

<label>

<input

type="radio"

name="choice"

value={choice.id}

checked={selectedChoice === choice.id}

onChange={() =>handleChoiceSelect(choice.id)}

/>

{choice.label} (Selectable)

</label>

</li>

    ))}

</ul>

<buttononClick={handleVoteSubmit}>Submit Vote`</button>`

<buttononClick={handleAnotherUserClick}>Another User`</button>`

</div>

  );

};

exportdefaultAnotherUserParticipation;

![1685190156021](image/README/1685190156021.png)

<h1>Thankyou Component 


importReactfrom'react'

importAnotherUserParticipationfrom'./AnotherUserParticipation'

importUserParticipationfrom'./UserParticipation'

constmsg="Thank you for your vote"

functionThankyouMessage() {

return (

<div>

<UserParticipationmsg/>

<AnotherUserParticipationmsg/>

</div>

  )

}

exportdefaultThankyouMessage








<h1> TASK 2

<h1> Timer Component Code



importReact, { useState, useEffect } from'react';

constTimer = () => {

const [countdown, setCountdown] = useState(10);

useEffect(() => {

consttimer = setInterval(() => {

setCountdown((prevCountdown) =>prevCountdown - 1);

    }, 1000);

if (countdown === 0) {

clearInterval(timer);

    }

return () =>clearInterval(timer);

  }, [countdown]);

return (

<div>

{countdown === 0 ? (

<h2>Time's Up!</h2>

    ) : (

<h2>Countdown: {countdown}</h2>

    )}

div>

  );

};

exportdefaultTimer;

![1685190529335](image/README/1685190529335.png)

on TIME UP:

![1685190726058](image/README/1685190726058.png)
