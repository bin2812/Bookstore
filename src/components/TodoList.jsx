import ItemTodoList from "./ItemTodoList";

export function TodoList() {
  const numbers = [
    { id: 1, text: "Playing game" },
    { id: 2, text: "Watching Film" },
    { id: 3, text: "Playing Sport" },
  ];
  return (
    <div>
      {numbers.map((item) => {
        return <ItemTodoList key={item.id} id={item.id} text={item.text} />;
      })}
    </div>
  );
}

export default TodoList;
