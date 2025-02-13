import ItemHobby from "./ItemHobby";

export function Hobby() {
  return (
    <div>
      <h2>Danh sách sở thích</h2>
      <ul>
        <ItemHobby stt="1" icon="💻" title="Lập trình" />
        <ItemHobby stt="2" icon="♟️" title="Cờ vua" />
        <ItemHobby stt="3" icon="📖" title="Đọc sách" />
        <ItemHobby stt="4" icon="📺" title="Xem phim" />
      </ul>
    </div>
  );
}
