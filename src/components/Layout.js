import React from "react";
import Navbar_t from "../components/Navbar_t";

export default function Layout({ children }) {
  return (
    <div className="m-auto">
      <Navbar_t />
      <div>
        { children }
      </div>
      <footer className="my-4 flex flex-row justify-center">
        <p className="text-yellow-900">@Copyright 2022 Made with Gatsby</p>
      </footer>
    </div>
  );
}
