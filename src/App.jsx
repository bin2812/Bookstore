import "./App.css";
import "./index.css";
// import { Blog } from "./components/Blog";
// import { Hobby } from "./components/Hobby";
// import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/WebBook/AboutUs";
import Contact from "./components/WebBook/Contact";
import DetailBooks from "./components/WebBook/DetailBooks";
import { Header } from "./components/WebBook/Header";
import Home from "./components/WebBook/Home";
import Shop from "./components/WebBook/Shop";
import Support from "./components/WebBook/Support";
import Cart from "./components/WebBook/Cart";
// import { Person } from "./components/Person";
// import { Profile } from "./components/Profile";
// import { Calculator } from "./components/Calculator";
// react thực hiện render theo dạng tree, gốc, nhánh
// Nếu như có từ 2 component trở lên thì cần phải bọc trong 1 thẻ div, <></>
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailBooks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Support />
    </>
  );
}

export default App;
{
  /*  <h1>Website Reactjs</h1> 
 <h1 className="text-3xl font-bold underline">Hello world!</h1>
<Profile />
<Person />
<Hobby />
<Blog />
<Footer /> */
}
{
  /* <Calculator /> */
}
{
  /* <TodoList /> */
}
{
  /* <MapContent /> */
}
{
  /* {open && <Counter />}
<div>
  <button
    className="bg-red-500 px-2"
    onClick={function () {
      setOpen(false);
    }}
  >
    Ẩn
  </button>
  <button
    className="bg-blue-500 ml-2 px-2"
    onClick={function () {
      setOpen(true);
    }}
  >
    Hiện
  </button>
</div> */
}
