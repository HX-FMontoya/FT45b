import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <h1>Demo React Hooks</h1>
      <p>Esto es Counter:</p>
      <Counter />
      <p>Esto es Posts</p>
      <Posts />
    </div>
  );
}

export default App;
