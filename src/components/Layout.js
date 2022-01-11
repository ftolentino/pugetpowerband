import React from "react";
import Navbar_t from "../components/Navbar_t";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar_t />
      <div>
        { children }
      </div>
      <footer>
        <p>Copyright 2022 Puget Power</p>
      </footer>
    </div>
  );
}
