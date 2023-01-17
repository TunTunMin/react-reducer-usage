import { useState, useReducer } from 'react';
// import './App.css';

const intialValue = { people: []};

function reducer(state, action){
  if(action.type === "INPUT_ADDED"){
    const newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople};
  }
}
function App() {
  
  const [inputValue,setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, intialValue);
  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {id: Math.random().toString(), name: inputValue}
    dispatch({type: "INPUT_ADDED", payload: newItem});
    setInputValue("");
  }
  console.log(state)
  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Name" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
        <button type="submit">Save</button>
      </form>
      <ul>
        {state.people.map((person) => {
          return <li key={person.id}>{person.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
