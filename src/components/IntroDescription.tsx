import * as React from "react";

export const IntroDescription = () => {
  return (
    <>
      <p>
        This page consolidates the keyboard interaction information presented on
        the{" "}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/">
          WAI Patterns pages
        </a>{" "}
        for a selection of native HTML elements onto one page, for easier
        referencing. Many examples were also pulled from the{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
          MDN Elements Web Docs
        </a>
      </p>
      <h2>
        Todo: add a section of all the typical keys that are used for navigation
        <ul>
          <li>Tab</li>
          <li>Shift + Tab</li>
          <li>Enter</li>
          <li>Space</li>
          <li>Arrow keys</li>
          <li>Escape</li>
          {/* Keys that are not available on every keyboard, t'f considered optional */}
          <li>Home</li>
          <li>End</li>
        </ul>
        Also Assumptions:
        - Visual expectations: focus states and active states
        - Tab and Shift + Tab are always used for navigation
      </h2>
    </>
  );
};
