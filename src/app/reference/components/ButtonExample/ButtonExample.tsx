"use client";
import * as React from "react";
import "./ButtonExample.css";

export const ButtonExample = () => {
  const [btnCounter, setBtnCounter] = React.useState(0);
  return (
    <>
      <p>
        The button has been clicked <strong id="btn-counter">{btnCounter}</strong>{" "}
        times
      </p>
      <button
        className="btn-example"
        id="btn-with-counter"
        onClick={() => setBtnCounter(btnCounter + 1)}
      >
        Update the Click Counter
      </button>
      <button className="btn-example">Dummy button</button>
      <button className="btn-example">Dummy button</button>
    </>
  );
};
