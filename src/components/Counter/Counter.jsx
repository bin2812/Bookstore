import { useState } from "react";
// 1. Khi tăng lên 15 thì Ẩn nút ➕ đi
// 2. Thực hiện tạo 2 nút để Ẩn/Hiện giá trị của biến count và các nút tăng giảm giá trị của biến count

// Khi thay đổi trạng thái của 1 state thì nó sẽ re-render lại component đó
// state: count
// setCount: cập nhật giá trị của state count
// khi giá trị của state count > 0 thì mình sẽ cho nó hiện ra nút ➖, &&: và, ||: hoặc
const Counter = () => {
  const [count, setCount] = useState(2);
  console.log("render: ", count);
  return (
    <>
      <div>Counter: {count}</div>
      {count < 15 && (
        <button
          onClick={function () {
            setCount(count + 1);
          }}
        >
          ➕
        </button>
      )}
      {count > 0 && (
        <button
          onClick={function () {
            setCount(count - 1);
          }}
        >
          ➖
        </button>
      )}
      <button
        onClick={function () {
          setCount(0);
        }}
      >
        🔃
      </button>
    </>
  );
};

export default Counter;
