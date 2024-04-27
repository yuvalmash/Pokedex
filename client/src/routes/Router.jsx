import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/constants";
import { Home } from "../pages/Home/Home";
import { Error } from "../pages/Error/Error";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ERROR} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
