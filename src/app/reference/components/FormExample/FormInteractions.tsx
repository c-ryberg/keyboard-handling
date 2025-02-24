import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";

export const FormInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <p>
        A Form is made up of one or &lt;input&gt; elements which are grouped
        within a &lt;form&gt; element.
        <br />
        When input elements are grouped in this way, the user can submit the
        form by:
        <ul>
          <li>
            <kbd>Tab</kbd>ing to a Submit button, if present, and activating the
            button with <kbd>Enter</kbd> or <kbd>Space</kbd>
          </li>
          <li>
            Pressing the <kbd>Enter</kbd> key while keyboard focus is on one of
            the input elements in the form
          </li>
        </ul>
        <br />
        When the form is submitted, the browser will first validate that all
        required inputs have been filled out. If any required inputs are empty,
        browser-specific validations will be triggered.
      </p>
    </>
  );
};
