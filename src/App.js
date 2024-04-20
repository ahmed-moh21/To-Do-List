import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import List from "./Component/ListHome/List";
import ShowList from "./Component/ShowList/ShowList";
import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/show" element={<ShowList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
