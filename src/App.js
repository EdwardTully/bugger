
import './App.css'
import UserWindow from './features/users/UserWindow';
import UserEmail from './features/emails/UserEmail';
import TodoView from './features/todos/TodoView';

function App() {
  return (
    <div className="App">
        <UserWindow/>
        <UserEmail/>
        <TodoView/>
     
    </div>
  );
}

export default App;
