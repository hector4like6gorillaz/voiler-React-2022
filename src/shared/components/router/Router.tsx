import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../../pages/home/index";
import Counter from "../../../pages/counter/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
