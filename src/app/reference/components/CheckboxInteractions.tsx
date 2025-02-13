import * as React from "react";
import { KeyboardInteractionHeader } from "./KeyboardInteractionHeader";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
 */
export const CheckboxInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          When the checkbox has focus, pressing the <kbd>Space</kbd> key changes
          the state of the checkbox.
        </li>
      </ul>
    </>
  );
};
