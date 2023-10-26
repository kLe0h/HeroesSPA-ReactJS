import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      {/* Se carga el Navbar */}
      <Navbar />
      {/* Outlet donde se encuentran las rutas hijas del AppRouter */}
      <Outlet />
    </>
  );
};
