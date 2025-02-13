import { Keyboard, Target, Puzzle, Beaker, Bug, Mouse } from "lucide-react";

const KeyboardIcon = () => <Keyboard className="w-6 h-6 inline-block mr-2" />;
const TargetIcon = () => <Target className="w-6 h-6 inline-block mr-2" />;
const PuzzleIcon = () => <Puzzle className="w-6 h-6 inline-block mr-2" />;
const BeakerIcon = () => <Beaker className="w-6 h-6 inline-block mr-2" />;
const BugIcon = () => <Bug className="w-6 h-6 inline-block mr-2" />;
const MouseIcon = () => <Mouse className="w-6 h-6 inline-block mr-2" />;

export default function KeyboardTestingPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Keyboard Testing Guide</h1>
        </header>

        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <TargetIcon /> Objective of Keyboard Testing
            </h2>
            <p className="text-gray-700">
              To ensure that every interactive element on a web application can
              be accessed, used, and navigated using only a keyboard. This is
              essential for users who rely on screen readers, switch devices, or
              who cannot use a mouse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <MouseIcon /> Perspective for Mouse Users
            </h2>
            <p className="text-gray-700">
              If you are a mouse or trackpad user who doesn't often rely on the
              keyboard for navigation, think of it like this:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 my-4 text-gray-600">
              If you can operate something on the page with a mouse, such as
              selecting, opening, editing, scrolling, etc... then you should
              also be able to do it without a mouse
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <PuzzleIcon /> Key Principles of Keyboard Accessibility
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Logical Tab Order:</strong> Focus should move in a
                predictable and intuitive sequence (usually left-to-right,
                top-to-bottom).
              </li>
              <li>
                <strong>Visible Focus Indicator:</strong> There should always be
                a visible outline showing which element is currently focused.
              </li>
              <li>
                <strong>Operability with Standard Keys:</strong> Users should be
                able to interact with all controls using common keyboard
                shortcuts.
              </li>
              <li>
                <strong>No Keyboard Traps:</strong> Users should never get
                "stuck" on an element and be unable to navigate away.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <KeyboardIcon /> Keys to Use During Testing
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <li>
                <strong>Tab:</strong> Move forward through interactive elements
              </li>
              <li>
                <strong>Shift + Tab:</strong> Move backward through interactive
                elements
              </li>
              <li>
                <strong>Enter:</strong> Activate buttons, links, and form
                submissions
              </li>
              <li>
                <strong>Spacebar:</strong> Toggle checkboxes or play/pause media
              </li>
              <li>
                <strong>Arrow keys:</strong> Navigate within sliders, dropdown
                menus, and radio button groups
              </li>
              <li>
                <strong>Esc (Escape):</strong> Close modals, dropdowns, or
                pop-up menus
              </li>
              <li>
                <strong>Home/End:</strong> Jump to the start or end of lists or
                menus
              </li>
              <li>
                <strong>Page Up/Page Down:</strong> Scroll within long content
                sections or listboxes
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <BeakerIcon /> Step-by-Step Testing Process
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-gray-700">
              <li>
                <strong>General Navigation:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Use Tab to navigate through the entire page.
                    <ul className="list-none pl-6 mt-1">
                      <li>
                        ✅ Confirm that the focus moves in a logical order.
                      </li>
                      <li>
                        ✅ Check if every interactive element is reachable.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Use Shift + Tab to navigate backward.
                    <ul className="list-none pl-6 mt-1">
                      <li>✅ Confirm that focus moves in reverse order.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Focus Management:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Ensure each element has a visible focus indicator (e.g., a
                    colored outline around buttons or inputs).
                  </li>
                  <li>
                    Test if modals/dialogs trap focus inside them until they are
                    closed.
                  </li>
                  <li>
                    When closing a dialog, confirm that the focus returns to the
                    previously focused element.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Interactive Elements:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>
                    Links/Buttons: Press Enter or Spacebar to activate them.
                  </li>
                  <li>
                    Forms: Navigate through inputs with Tab and submit with
                    Enter.
                  </li>
                  <li>
                    Dropdowns (&lt;select&gt;): Use Arrow keys to move through
                    options and Enter to select.
                  </li>
                  <li>
                    Radio Buttons: Use Arrow keys to move between options.
                  </li>
                  <li>
                    Sliders: Adjust values with Arrow keys and jump to min/max
                    with Home and End.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Modals, Popups, and Dialogs:</strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Open with Enter or Spacebar.</li>
                  <li>Close with Esc.</li>
                  <li>
                    Confirm that focus is trapped within the dialog (can't Tab
                    out).
                  </li>
                  <li>
                    Confirm that after closing, focus returns to the trigger
                    button.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Custom Components (e.g., custom dropdowns, carousels):
                </strong>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Verify they are keyboard-operable.</li>
                  <li>
                    Confirm they follow ARIA roles and keyboard behaviors
                    similar to native HTML components.
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <BugIcon /> Common Issues to Watch For
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong className="text-red-600">🚫 No Focus Indicator:</strong>{" "}
                Focus is invisible or styled out.
              </li>
              <li>
                <strong className="text-red-600">
                  🚫 Incorrect Tab Order:
                </strong>{" "}
                Focus jumps around unexpectedly.
              </li>
              <li>
                <strong className="text-red-600">🚫 Keyboard Traps:</strong> You
                cannot escape a modal without refreshing the page.
              </li>
              <li>
                <strong className="text-red-600">
                  🚫 Custom Components Without ARIA Roles:
                </strong>{" "}
                Components that don't behave like their native equivalents.
              </li>
              <li>
                <strong className="text-red-600">
                  🚫 Non-Responsive Controls:
                </strong>{" "}
                Buttons or links that do nothing when activated with Enter or
                Spacebar.
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
