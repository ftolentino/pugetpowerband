import React from "react";
import Navbar_t from "../components/Navbar_t";

export default function Layout({ children }) {
  return (
    <div className="m-auto">
      <Navbar_t />
      <div>
        { children }
      </div>
      <footer className="flex flex-row justify-center">
        <p>@Copyright 2022 Puget Power</p>
      </footer>
    </div>
  );
}
