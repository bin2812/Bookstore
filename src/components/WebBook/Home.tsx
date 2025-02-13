import React from "react";
import { Header } from "./Header";
import Banner from "./Banner";
import Utilities from "./Utilities";
import BookList from "./BookList";
import AuthorInformation from "./AuthorInformation";
import Feedback from "./Feedback";
import ShopByCategory from "./ShopByCategory";
import Stats from "./Stats";

const Home = () => {
  return (
    <>
      <Banner />
      <Utilities />
      <BookList />
      <AuthorInformation />
      <Feedback />
      <ShopByCategory />
      <Stats />
    </>
  );
};

export default Home;
