// rafce: cú pháp viết nhanh
import ItemTodoList from "./ItemTodoList";
const MapContent = () => {
  // tạo ra 1 mảng number chứa các object (đối tượng)
  // let numbers = ["🦉", 2, 3, 4, 5, 6];
  const numbers = [
    { id: 1, text: "🦉" },
    { id: 2, text: "🦜" },
    { id: 3, text: "Three" },
    { id: 4, text: "Four" },
    { id: 5, text: "Five" },
    { id: 6, text: "🐮" },
  ];
  return (
    <div>
      {numbers.map((item) => {
        return <ItemTodoList key={item.id} id={item.id} text={item.text} />;
      })}
    </div>
  );
};

export default MapContent;
