import * as React from "react";

export const IntroDescription = () => {
  return (
    <div className="flex flex-col align-center mb-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-2 flex items-center text-blue-700">
          Expected keyboard patterns in native HTML
        </h1>
        <p>
          Most of the keyboard patterns used today were established in the early
          1990s. Users and devices that make use of these patterns expect the
          behavior to be the same across all websites. You can imagine, then,
          how disruptive it is when these patterns are disabled, overwritten, or
          not re-implemented in custom components. It is important to understand
          these well-established patterns in order to be able to accurately test
          a page for keyboard handling.
        </p>

        <h2 className="text-2xl font-semibold mb-2 mt-3 flex items-center text-blue-700">
          How to use this page
        </h2>
        <p>
          Use this page as a reference tool for the expected keyboard patterns
          of native HTML elements. The way the elements behave on this page
          showcases how they are expected to behave on all websites. The
          examples on this page are not exhaustive, but they cover many of the
          most common interactive elements, and have been implemented with
          minimal styles and little or no Javascript.
        </p>
        {/* <p className="mt-4">
        // todo: finish talking about how things may not be a literal radio, but should behave like one
          Additionally, focus on understanding the principles of these patterns. 
        </p> */}
        <h2 className="text-2xl font-semibold mb-2 mt-3 flex items-center text-blue-700">
          What is not included
        </h2>
        <p>
          There are many common UI components that do not have a dedicated HTML
          element, such as{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/">
            autocomplete inputs
          </a>
          ,{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch/">
            switches
          </a>
          , etc...Despite lacking a standard implementation, these common
          patterns also have expected keyboard behaviors, and there is
          significant documentation about those keyboard behaviors on the{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/">
            WAI Patterns pages
          </a>
        </p>
        <h3 className="text-1xl font-semibold mb-2 mt-4 flex items-center text-blue-700">
          Sources
        </h3>
        <p className="mb-4">
          The keyboard interaction information on this page is from the{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/">
            WAI Patterns pages
          </a>
          . Also, many code examples were pulled from the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">
            MDN Elements Web Docs
          </a>
        </p>
        <small>This page was last updated: February 24, 2025</small>
      </div>
    </div>
  );
};
