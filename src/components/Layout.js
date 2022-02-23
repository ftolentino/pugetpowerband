import React from "react";
import Navbar_t from "../components/Navbar_t";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar_t />
      <div>
        { children }
      </div>
      <footer className="fixed bottom-0 w-full z-10 left-0 py-10 bg-aqua-teal flex flex-row justify-center">
        <p className="text-yellow-900">@Copyright 2022 Made with Gatsby</p>
      </footer>
    </div>
  );
}

/*
position: fixed;
bottom: 0;
left: 0;
width: 100%;
z-index: 1;
*/