import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

const icon = <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path><path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path></svg>

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo name={'Safal'} description={'Random task'} icon={icon}/>
    </div>
  );
}

export default App;
