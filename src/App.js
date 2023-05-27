import './App.css';
import PollDisplay from './Components/PollDisplay';
import UserParticipation from './Components/UserParticipation';
import Timer from './Components/Timer';
function App() {


  const poll = {
    question: "What is your favourite programming language?",
    options: [
      { text: "C++", count: 0 },
      { text: "Java", count: 0 },
      { text: "Python", count: 0 },
      { text: "JavaScript", count: 0 },
    ],
  };

  return (

    <>
    <div className="App">
      <h1>

       Task 1: Polling App 
      </h1>
    </div>
    <PollDisplay  />
    <h2>
      Task 2
    </h2>
    <Timer/>
   

    

    </>
  );
}

export default App;
