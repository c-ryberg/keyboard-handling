import { Beaker } from "lucide-react";

const BeakerIcon = () => <Beaker className="w-6 h-6 inline-block mr-2" />;

export const TestingProcess = () => (
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
              <li>✅ Confirm that the focus moves in a logical order.</li>
              <li>✅ Check if every interactive element is reachable.</li>
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
            Ensure each element has a visible focus indicator (e.g., a colored
            outline around buttons or inputs).
          </li>
          <li>
            Test if modals/dialogs trap focus inside them until they are closed.
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
          <li>Links/Buttons: Press Enter or Spacebar to activate them.</li>
          <li>
            Forms: Navigate through inputs with Tab and submit with Enter.
          </li>
          <li>
            Dropdowns (&lt;select&gt;): Use Arrow keys to move through options
            and Enter to select.
          </li>
          <li>Radio Buttons: Use Arrow keys to move between options.</li>
          <li>
            Sliders: Adjust values with Arrow keys and jump to min/max with Home
            and End.
          </li>
        </ul>
      </li>
      <li>
        <strong>Modals, Popups, and Dialogs:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Open with Enter or Spacebar.</li>
          <li>Close with Esc.</li>
          <li>
            Confirm that focus is trapped within the dialog (can't Tab out).
          </li>
          <li>
            Confirm that after closing, focus returns to the trigger button.
          </li>
        </ul>
      </li>
      <li>
        <strong>Custom Components (e.g., custom dropdowns, carousels):</strong>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Verify they are keyboard-operable.</li>
          <li>
            Confirm they follow ARIA roles and keyboard behaviors similar to
            native HTML components.
          </li>
        </ul>
      </li>
    </ol>
  </section>
);
