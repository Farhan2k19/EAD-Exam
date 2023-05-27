import './App.css';
import PollDisplay from './Components/PollDisplay';
import UserParticipation from './Components/UserParticipation';
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
        Polling App 
      </h1>
    </div>
    <PollDisplay  />
   

    

    </>
  );
}

export default App;
