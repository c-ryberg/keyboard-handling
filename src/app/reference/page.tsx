import {
  ButtonExample,
  ButtonInteractions,
  CheckboxInteractions,
  DiscolsureInteractions,
  FormExample,
  InputTypeExample,
  IntroDescription,
  LinkInteractions,
  ModalDialogExample,
  ModalDialogInteractions,
  RadioGroupInteractions,
  SingleSelectExample,
  SingleSelectInteractions,
  MultipleSelectExample,
} from "./components";
import "./reference.css";
/**
 * todo:
 * - Replace the favicon
 * - Give the page a nicer font
 * - make this mobile friendly
 * - explain that all info is pulled from the WAI-ARIA Authoring Practices and Mozilla
 * - Add a "last updated" timestamp
 * - make sure all the links actually work
 * - Replace all <br/>s with tailwind spacing
 */
export default function Home() {
  const pageTopId = "page-top";
  const pageBottomId = "page-bottom";

  return (
    <div className="app">
      <h1>Keyboard handling for native HTML elements</h1>
      <IntroDescription />

      <div className="display-table">
        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Buttons</h2>
            <ButtonExample />
          </div>
          <div className="display-table__cell">
            <ButtonInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div id={pageTopId} className="display-table__cell">
            <h2>Links</h2>
            <a href="https://www.google.com">Take me to Google on this page</a>
            <br />
            <br />
            <a href="https://www.google.com" target="_blank">
              Take me to Google on a new page
            </a>
            <br />
            <br />
            <a href={`#${pageBottomId}`}>Take me to the bottom of this page</a>
          </div>
          <div className="display-table__cell">
            <LinkInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Radio Group</h2>
            <fieldset>
              <legend>Please select your preferred contact method:</legend>
              <div>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
                <label htmlFor="contactChoice1">Email</label>

                <input
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
                <label htmlFor="contactChoice2">Phone</label>

                <input
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="mail"
                />
                <label htmlFor="contactChoice3">Mail</label>
              </div>
            </fieldset>
          </div>
          <div className="display-table__cell">
            <RadioGroupInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Checkboxes</h2>
            <fieldset>
              <legend>Please select your preferred contact method:</legend>
              <div>
                <input
                  type="checkbox"
                  id="contactOption1"
                  name="contact"
                  value="email"
                />
                <label htmlFor="contactOption1">Email</label>

                <input
                  type="checkbox"
                  id="contactOption2"
                  name="contact"
                  value="phone"
                />
                <label htmlFor="contactOption2">Phone</label>

                <input
                  type="checkbox"
                  id="contactOption3"
                  name="contact"
                  value="mail"
                />
                <label htmlFor="contactOption3">Mail</label>
              </div>
            </fieldset>
          </div>
          <div className="display-table__cell">
            <CheckboxInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Dropdown Select</h2>
            <h3>Single Select</h3>
            <SingleSelectExample />
          </div>
          <div className="display-table__cell">
            <SingleSelectInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h3>Multiple Select</h3>
            <MultipleSelectExample />
          </div>
          <div className="display-table__cell">
            <p>Other text</p>
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Disclosure (often called Accordion)</h2>
            <details>
              <summary>Expand to read more about System Requirements</summary>
              <p>
                Requires a computer running an operating system. The computer
                must have some memory and ideally some kind of long-term
                storage. An input device as well as some form of output device
                is recommended.
              </p>
              <a href="www.google.com">
                Here is a focusable link that goes to Google
              </a>
            </details>
          </div>
          <div className="display-table__cell">
            <DiscolsureInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Dialog (often called Modal)</h2>
            <ModalDialogExample />
          </div>
          <div className="display-table__cell">
            <ModalDialogInteractions />
          </div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Special Input Types</h2>
            <InputTypeExample />
          </div>
          <div className="display-table__cell"></div>
        </div>

        <div className="display-table__row">
          <div className="display-table__cell">
            <h2>Form</h2>
            <FormExample />
          </div>
          <div className="display-table__cell">
            <p>Other text</p>
          </div>
        </div>
      </div>
      <h2 id={pageBottomId}>This is the bottom of the page</h2>
      <a href={`#${pageTopId}`}>Back to the Links section</a>
      <br />
      <a href="#">Back to the top</a>
    </div>
  );
}
