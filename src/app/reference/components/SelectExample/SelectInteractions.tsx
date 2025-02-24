import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 */
export const SingleSelectInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <p>
        The native &lt;select&gt; element uses the{" "}
        <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/">
          combobox pattern
        </a>
        , where the closed input field is known as a "combobox" and the open
        dropdown menu is known as a "listbox". Both the combobox and listbox
        have their own keyboard interactions.
      </p>
      <p>
        The interactions listed here are only for non-editable comboboxes. For
        further information about editable comboboxes, please refer to the WAI
        Patterns page for Combobox
      </p>
      <h4>Combobox Keyboard Interaction</h4>
      <p>When focus is on the combobox:</p>
      <ul>
        {/* todo: figure out why this isn't in the WAI aria spec */}
        {/* <li>
          <kbd>Spacebar</kbd>: If the popup is available, moves focus into the
          popup and places focus on the first focusable element in the popup. 
          Or, if the popup is already open, selects the currently highlighted 
          item and closes the popup
        </li> */}
        <li>
          <kbd>Down Arrow</kbd>: If the popup is available, moves focus into the
          popup and places focus on the first focusable element in the popup.
        </li>
        <li>
          <kbd>Up Arrow</kbd> (Optional): If the popup is available, places
          focus on the last focusable element in the popup.
        </li>
        <li>
          <kbd>Escape</kbd>: Dismisses the popup if it is visible.
        </li>
        <li>
          Any printable Character: optionally moves focus to a value that starts
          with the typed characters.
        </li>
        <li>
          <kbd>Alt</kbd> + <kbd>Down Arrow</kbd> (Optional): If the popup is
          available but not displayed, displays the popup without moving focus.
        </li>
        <li>
          <kbd>Alt</kbd> + <kbd>Up Arrow</kbd> (Optional): If the popup is
          displayed:
          <ul>
            <li>If the popup contains focus, returns focus to the combobox.</li>
            <li>Closes the popup.</li>
          </ul>
        </li>
      </ul>

      <h4>Listbox Popup Keyboard Interaction</h4>
      <p>When focus is in a listbox popup:</p>
      <ul>
        <li>
          <kbd>Enter</kbd>: Accepts the focused option in the listbox by closing
          the popup, placing the accepted value in the combobox.
        </li>
        <li>
          <kbd>Escape</kbd>: Closes the popup and returns focus to the combobox.
        </li>
        <li>
          <kbd>Down Arrow</kbd>: Moves focus to and selects the next option. If
          focus is on the last option, either returns focus to the combobox or
          does nothing.
        </li>
        <li>
          <kbd>Up Arrow</kbd>: Moves focus to and selects the previous option.
          If focus is on the first option, either returns focus to the combobox
          or does nothing.
        </li>
        <li>
          <kbd>Home</kbd> (Optional): Moves focus to and selects the first
          option.
        </li>
        <li>
          <kbd>End</kbd> (Optional): Moves focus to the last option.
        </li>
        <li>
          Any printable character: Moves focus to the next option with a name
          that starts with the characters typed.
        </li>
      </ul>
    </>
  );
};
