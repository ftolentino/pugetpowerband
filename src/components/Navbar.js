import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
        <ul>
          <li>
            About
          </li>
          <li>Music</li>
          <li>Media</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
  }
}
