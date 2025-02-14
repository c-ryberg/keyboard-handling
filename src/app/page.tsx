import { CircleX, Keyboard, Target, Puzzle, Bug, Mouse } from "lucide-react";

import { NavHeader } from "../components/layout/NavHeader";
import { MouseOperationsTable } from "./pageComponents/MouseOperationsTable";

const iconClasses = "w-6 h-6 inline-block";
const KeyboardIcon = () => (
  <Keyboard aria-hidden="true" className={`${iconClasses} mr-2`} />
);
const TargetIcon = () => (
  <Target aria-hidden="true" className={`${iconClasses} mr-2`} />
);
const PuzzleIcon = () => (
  <Puzzle aria-hidden="true" className={`${iconClasses} mr-2`} />
);
const BugIcon = () => (
  <Bug aria-hidden="true" className={`${iconClasses} mr-2`} />
);
const MouseIcon = () => (
  <Mouse aria-hidden="true" className={`${iconClasses} mr-2`} />
);
const Cross = () => (
  <CircleX aria-hidden="true" className={`${iconClasses} text-red-600`} />
);

export default function KeyboardTestingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavHeader />

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
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
              selecting, opening, editing, scrolling, etc... then you must also
              be able to do it <strong>without</strong> a mouse
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
              <li>
                <strong>Efficient Navigation:</strong> Users should be able to
                bypass repetivite content (e.g. provide a skip link to jump past
                navigation bars)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <KeyboardIcon /> Keys to Use During Testing
            </h2>
            <ul className="grid grid-cols-1 gap-2 text-gray-700">
              <li>
                <kbd>Tab</kbd> Move forward through interactive elements
              </li>
              <li>
                <kbd>Shift + Tab</kbd> Move backward through interactive
                elements
              </li>
              <li>
                <kbd>Enter</kbd> Activate buttons, links, and form submissions
              </li>
              <li>
                <kbd>Spacebar</kbd> Toggle checkboxes or play/pause media
              </li>
              <li>
                <kbd>Arrow keys</kbd> Navigate within sliders, dropdown menus,
                and radio button groups
              </li>
              <li>
                <kbd>Esc (Escape)</kbd> Close modals, dropdowns, or pop-up menus
              </li>
              <li>
                <kbd>Home/End</kbd> Jump to the start or end of lists or menus
              </li>
              <li>
                <kbd>Page Up/Page Down</kbd> Scroll within long content sections
                or listboxes
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <MouseIcon /> Mouse Operations Table
            </h2>
            <MouseOperationsTable />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
              <BugIcon /> Common Issues to Watch For
            </h2>
            <ul className="list-none pl-6 space-y-2 text-gray-700">
              <li>
                <strong className="text-red-600">
                  <Cross /> No Focus Indicator:
                </strong>{" "}
                Focus is invisible or styled out.
              </li>
              <li>
                <strong className="text-red-600">
                  <Cross /> Incorrect Tab Order:
                </strong>{" "}
                Focus jumps around unexpectedly.
              </li>
              <li>
                <strong className="text-red-600">
                  <Cross /> Keyboard Traps:
                </strong>{" "}
                You cannot escape a modal without refreshing the page.
              </li>
              <li>
                <strong className="text-red-600">
                  <Cross /> Missing skip link:
                </strong>{" "}
                There is no skip link feature to bypass the navigation bar.
              </li>
              <li>
                <strong className="text-red-600">
                  <Cross /> Custom Components Without Native Behavior:
                </strong>{" "}
                Components that don't behave like their native equivalents.
              </li>
              <li>
                <strong className="text-red-600">
                  <Cross /> Non-Responsive Controls:
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
