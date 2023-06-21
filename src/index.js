import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./BaiTapLayoutComponent/Footer";
import Body from "./BaiTapLayoutComponent/Body";
import Header from "./BaiTapLayoutComponent/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header/>
    <Body />
    <Footer />
  </>
);
