import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main className="max-w-[400px] md:max-w-[1540px]">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
