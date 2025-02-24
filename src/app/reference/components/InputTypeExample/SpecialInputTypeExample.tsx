"use client";

import * as React from "react";

export const SpecialInputTypeExample = () => {
  const [selectedColor, setSelectedColor] = React.useState("#e66465");
  const [selectedDate, setSelectedDate] = React.useState("2020-07-22");

  return (
    <>
      <div>
        <h3>Color</h3>
        <label>
          Select a color:
          <input
            type="color"
            name="head"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
        </label>
        <br />
        <h3>Date</h3>
        <label>
          Select a date:
          <input
            type="date"
            name="trip-start"
            min="2020-01-01"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>
        <br />
        <h3>Number</h3>
        <label>
          What's your favorite number?
          <input type="number" name="favNumber" min="10" max="100" />
        </label>
        <br />
        <h3>Password</h3>
        <label>
          Password (8 characters minimum):
          <input type="password" name="password" minLength={8} required />
        </label>
        <br />
        <h3>Range Slider</h3>
        <label>
          Volume
          <input type="range" name="volume" min="0" max="11" />
        </label>
      </div>
    </>
  );
};
