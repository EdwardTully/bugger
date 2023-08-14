
import './App.css'
import UserWindow from './features/users/UserWindow';
import UserEmail from './features/emails/UserEmail';
import TodoView from './features/todos/TodoView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      <h1>Fetch, redux/react/axios</h1>
      <div className="container">
        <TodoView />
        <UserWindow />
        <UserEmail />
         <PostsView />

      </div>
    </div>
  );
}

export default App;
