import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";
import { Note } from "../Note/Note";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export const ButtonInteractions = () => {
  return (
    <>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          <kbd>Space</kbd>: Activates the button.
        </li>
        <li>
          <kbd>Enter</kbd>: Activates the button.
        </li>
        <li>
          After button activation, focus is set depending on the type of action
          the button performs. For example:
          <ul>
            <li>
              If activating the button opens a dialog, the focus moves to inside
              the dialog. (see{" "}
              <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">
                dialog pattern
              </a>
              )
            </li>
            <li>
              If activating the button closes a dialog, focus typically returns
              to the button that opened the dialog unless the function performed
              in the dialog context logically leads to a different element. For
              example, activating a cancel button in a dialog returns focus to
              the button that opened the dialog. However, if the dialog were
              confirming the action of deleting the page from which it was
              opened, the focus would logically move to a new context.
            </li>
            <li>
              If activating the button does not dismiss the current context,
              then focus typically remains on the button after activation, e.g.,
              an Apply or Recalculate button.
            </li>
            <li>
              If the button action indicates a context change, such as move to
              next step in a wizard or add another search criteria, then it is
              often appropriate to move focus to the starting point for that
              action.
            </li>
            <li>
              If the button is activated with a shortcut key, the focus usually
              remains in the context from which the shortcut key was activated.
              For example, if <kbd>Alt</kbd> + <kbd>U</kbd> were assigned to an
              "Up" button that moves the currently focused item in a list one
              position higher in the list, pressing <kbd>Alt</kbd> +{" "}
              <kbd>U</kbd> when the focus is in the list would not move the
              focus from the list.
            </li>
          </ul>
        </li>
      </ul>
      <Note>
        <p>
          The types of actions performed by buttons are distinctly different
          from the function of a link (see{" "}
          <a href="https://www.w3.org/WAI/ARIA/apg/patterns/link/">
            link pattern
          </a>
          ). It is important that both the appearance and role of a widget match
          the function it provides. Nevertheless, elements occasionally have the
          visual style of a link but perform the action of a button, or vice
          versa. In such cases, it is important to ensure that the element has
          the correct semantic role, given its function.
        </p>
      </Note>
    </>
  );
};
