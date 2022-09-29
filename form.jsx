function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        typeof="text"
        className="input"
        value={value}
        placeholder="Add To Do ..."
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
}
