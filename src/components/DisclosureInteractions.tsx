import * as React from "react";
import { KeyboardInteractionHeader } from "./KeyboardInteractionHeader";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
 */
export const DiscolsureInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <p>When the disclosure control has focus:</p>
      <ul>
        <li>
          <kbd>Enter</kbd>: activates the disclosure control and toggles the
          visibility of the disclosure content.
        </li>
        <li>
          <kbd>Space</kbd>: activates the disclosure control and toggles the
          visibility of the disclosure content.
        </li>
      </ul>
      <p>When the disclosure control is collapsed:</p>
      <ul>
        <li>
          <kbd>Tab</kbd>: moves focus to the next focusable element{" "}
          <strong>after</strong> the disclosure control.
        </li>
      </ul>

      <p>When the disclosure control is expanded:</p>
      <ul>
        <li>
          <kbd>Tab</kbd>: moves focus to the next focusable element (if any){" "}
          <strong>inside</strong> the disclosure control. If none are present,
          then focus is moved to the next focusable element after the disclosure
          control
        </li>
      </ul>
    </>
  );
};
