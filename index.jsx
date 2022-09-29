function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn React.js",
      isCompleted: false,
    },
    {
      text: "meet friend for lunch 12 pm",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Todo index={i} key={i} todo={todo} remove={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
