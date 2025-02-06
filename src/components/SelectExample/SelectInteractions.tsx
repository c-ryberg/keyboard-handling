import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
 */
export const SingleSelectInteractions = () => {
  return (
    <>
      <h1>Todo: Edit this down</h1>
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
      <h4>Combobox Keyboard Interaction</h4>
      <p>When focus is in the combobox:</p>
      <ul>
        <li>
          <kbd>Down Arrow</kbd>: If the popup is available, moves focus into the
          popup:
          <ul>
            <li>
              If the autocomplete behavior automatically selected a suggestion
              before <kbd>Down Arrow</kbd> was pressed, focus is placed on the
              suggestion following the automatically selected suggestion.
            </li>
            <li>
              Otherwise, places focus on the first focusable element in the
              popup.
            </li>
          </ul>
        </li>
        <li>
          <kbd>Up Arrow</kbd> (Optional): If the popup is available, places
          focus on the last focusable element in the popup.
        </li>
        <li>
          <kbd>Escape</kbd>: Dismisses the popup if it is visible. Optionally,
          if the popup is hidden before <kbd>Escape</kbd> is pressed, clears the
          combobox.
        </li>
        <li>
          <kbd>Enter</kbd>: If the combobox is editable and an autocomplete
          suggestion is selected in the popup, accepts the suggestion either by
          placing the input cursor at the end of the accepted value in the
          combobox or by performing a default action on the value. For example,
          in a messaging application, the default action may be to add the
          accepted value to a list of message recipients and then clear the
          combobox so the user can add another recipient.
        </li>
        <li>
          Printable Characters:
          <ul>
            <li>
              If the combobox is editable, type characters in the combobox. Note
              that some implementations may regard certain characters as invalid
              and prevent their input.
            </li>
            <li>
              If the combobox is not editable, optionally moves focus to a value
              that starts with the typed characters.
            </li>
          </ul>
        </li>
        <li>
          If the combobox is editable, it supports standard single line text
          editing keys appropriate for the device platform (see note below).
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
          the popup, placing the accepted value in the combobox, and if the
          combobox is editable, placing the input cursor at the end of the
          value.
        </li>
        <li>
          <kbd>Escape</kbd>: Closes the popup and returns focus to the combobox.
          Optionally, if the combobox is editable, clears the contents of the
          combobox.
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
          <kbd>Right Arrow</kbd>: If the combobox is editable, returns focus to
          the combobox without closing the popup and moves the input cursor one
          character to the right. If the input cursor is on the right-most
          character, the cursor does not move.
        </li>
        <li>
          <kbd>Left Arrow</kbd>: If the combobox is editable, returns focus to
          the combobox without closing the popup and moves the input cursor one
          character to the left. If the input cursor is on the left-most
          character, the cursor does not move.
        </li>
        <li>
          <kbd>Home</kbd> (Optional): Either moves focus to and selects the
          first option or, if the combobox is editable, returns focus to the
          combobox and places the cursor on the first character.
        </li>
        <li>
          <kbd>End</kbd> (Optional): Either moves focus to the last option or,
          if the combobox is editable, returns focus to the combobox and places
          the cursor after the last character.
        </li>
        <li>
          Any printable character:
          <ul>
            <li>
              If the combobox is editable, returns the focus to the combobox
              without closing the popup and types the character.
            </li>
            <li>
              Otherwise, moves focus to the next option with a name that starts
              with the characters typed.
            </li>
          </ul>
        </li>
        <li>
          <kbd>Backspace</kbd> (Optional): If the combobox is editable, returns
          focus to the combobox and deletes the character prior to the cursor.
        </li>
        <li>
          <kbd>Delete</kbd> (Optional): If the combobox is editable, returns
          focus to the combobox, removes the selected state if a suggestion was
          selected, and removes the inline autocomplete string if present.
        </li>
      </ul>
    </>
  );
};
