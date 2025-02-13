import * as React from "react";
import { KeyboardInteractionHeader } from "../KeyboardInteractionHeader";
import { Note } from "../Note/Note";

/**
 * From:
 * https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
 */
export const ModalDialogInteractions = () => {
  return (
    <>
      <h1>Todo: Edit this down</h1>
      <KeyboardInteractionHeader />
      <ul>
        <li>
          When a dialog opens, focus moves to an element inside the dialog. See
          notes below regarding initial focus placement.
        </li>
        <li>
          <kbd>Tab</kbd>:
          <ul>
            <li>Moves focus to the next tabbable element inside the dialog.</li>
            <li>
              If focus is on the last tabbable element inside the dialog, moves
              focus to the first tabbable element inside the dialog.
            </li>
          </ul>
        </li>
        <li>
          <kbd>Shift</kbd> + <kbd>Tab</kbd>:
          <ul>
            <li>
              Moves focus to the previous tabbable element inside the dialog.
            </li>
            <li>
              If focus is on the first tabbable element inside the dialog, moves
              focus to the last tabbable element inside the dialog.
            </li>
          </ul>
        </li>
        <li>
          <kbd>Escape</kbd>: Closes the dialog.
        </li>
      </ul>

      <Note>
        <ol>
          <li>
            When a dialog opens, focus moves to an element contained in the
            dialog. Generally, focus is initially set on the first focusable
            element. However, the most appropriate focus placement will depend
            on the nature and size of the content. Examples include:
            <ul>
              <li>
                If the dialog content includes semantic structures, such as
                lists, tables, or multiple paragraphs, that need to be perceived
                in order to easily understand the content, i.e., if the content
                would be difficult to understand when announced as a single
                unbroken string, then it is advisable to add{" "}
                <code>tabindex="-1"</code> to a static element at the start of
                the content and initially focus that element. This makes it
                easier for assistive technology users to read the content by
                navigating the semantic structures. Additionally, it is
                advisable to omit applying <code>aria-describedby</code> to the
                dialog container in this scenario.
              </li>
              <li>
                If content is large enough that focusing the first interactive
                element could cause the beginning of content to scroll out of
                view, it is advisable to add <code>tabindex="-1"</code> to a
                static element at the top of the dialog, such as the dialog
                title or first paragraph, and initially focus that element.
              </li>
              <li>
                If a dialog contains the final step in a process that is not
                easily reversible, such as deleting data or completing a
                financial transaction, it may be advisable to set focus on the
                least destructive action, especially if undoing the action is
                difficult or impossible. The{" "}
                <a href="../alertdialog/">Alert Dialog Pattern</a> is often
                employed in such circumstances.
              </li>
              <li>
                If a dialog is limited to interactions that either provide
                additional information or continue processing, it may be
                advisable to set focus to the element that is likely to be most
                frequently used, such as an <q>OK</q> or <q>Continue</q> button.
              </li>
            </ul>
          </li>
          <li>
            When a dialog closes, focus returns to the element that invoked the
            dialog unless either:
            <ul>
              <li>
                The invoking element no longer exists. Then, focus is set on
                another element that provides logical work flow.
              </li>
              <li>
                The work flow design includes the following conditions that can
                occasionally make focusing a different element a more logical
                choice:
                <ol>
                  <li>
                    It is very unlikely users need to immediately re-invoke the
                    dialog.
                  </li>
                  <li>
                    The task completed in the dialog is directly related to a
                    subsequent step in the work flow.
                  </li>
                </ol>
                For example, a grid has an associated toolbar with a button for
                adding rows. The Add Rows button opens a dialog that prompts for
                the number of rows. After the dialog closes, focus is placed in
                the first cell of the first new row.
              </li>
            </ul>
          </li>
          <li>
            It is strongly recommended that the tab sequence of all dialogs
            include a visible element with role <code>button</code> that closes
            the dialog, such as a close icon or cancel button.
          </li>
        </ol>
      </Note>
    </>
  );
};
