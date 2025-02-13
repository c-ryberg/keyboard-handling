import * as React from "react";
import { KeyboardInteractionHeader } from "./KeyboardInteractionHeader";
import { Note } from "./Note/Note";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/radio/
 */
export const RadioGroupInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd>: Move focus into
          and out of the radio group. When focus moves into a radio group:
          <ul>
            <li>
              If a radio button is checked, focus is set on the checked button.
            </li>
            <li>
              If none of the radio buttons are checked, focus is set on the
              first radio button in the group.
            </li>
          </ul>
        </li>
        <li>
          <kbd>Space</kbd>: checks the focused radio button if it is not already
          checked.
        </li>
        <li>
          <kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd>: move focus to the
          next radio button in the group, uncheck the previously focused button,
          and check the newly focused button. If focus is on the last button,
          focus moves to the first button.
        </li>
        <li>
          <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd>: move focus to the
          previous radio button in the group, uncheck the previously focused
          button, and check the newly focused button. If focus is on the first
          button, focus moves to the last button.
        </li>
      </ul>

      <Note>
        <p>
          The initial focus behavior described above differs slightly from the
          behavior provided by some browsers for native HTML radio groups. In
          some browsers, if none of the radio buttons are selected, moving focus
          into the radio group with <kbd>Shift</kbd> + <kbd>Tab</kbd> will place
          focus on the last radio button instead of the first radio button.
        </p>
      </Note>

      <p>
        The above section describes the keyboard interaction implemented for{" "}
        <strong>most</strong> radio groups. For the special case of a radio
        group nested inside a toolbar, use the keyboard interaction described on
        the WAI ARIA{" "}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/">
          Toolbar pattern
        </a>{" "}
        page.
      </p>
    </>
  );
};
