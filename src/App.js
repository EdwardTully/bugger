
import './App.css'
import UserWindow from './features/users/UserWindow';
import UserEmail from './features/emails/UserEmail';
import TodoView from './features/todos/TodoView';

function App() {
  return (
    <div className="App">
      <h1>Fetch, redux/react/axios</h1>
      <div className="container">
        <TodoView />

        <UserWindow />

        <UserEmail />
      </div>
    </div>
  );
}

export default App;
