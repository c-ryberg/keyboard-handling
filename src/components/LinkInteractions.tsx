import * as React from "react";
import { KeyboardInteractionHeader } from "./KeyboardInteractionHeader";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/link/
 */
export const LinkInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          <kbd>Enter</kbd>: Executes the link and moves focus to the link
          target. If the link target is static, such as a section header or a
          new page, it might not show a visual focus indicator. <kbd>Tab</kbd>{" "}
          will move focus to the next focusable element (if any) after the
          target
        </li>
      </ul>
    </>
  );
};
