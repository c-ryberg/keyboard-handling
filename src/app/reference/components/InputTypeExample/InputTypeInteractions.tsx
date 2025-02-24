import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";

export const InputTypeInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd>: Move focus into
          and out of the text input.
        </li>
        <li>
          <kbd>Enter</kbd>: (situational) if the input is in a &lt;form&gt;
          element and if the input has focus, then trigger the form submit
          action
        </li>
      </ul>
    </>
  );
};
