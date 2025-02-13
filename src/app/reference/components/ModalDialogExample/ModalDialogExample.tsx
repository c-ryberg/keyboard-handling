"use client";
import * as React from "react";

export const ModalDialogExample = () => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const showDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <p>
          <label>
            Favorite animal:
            <select>
              <option value="">Choose…</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
            </select>
          </label>
        </p>
        <div>
          <button value="cancel" onClick={closeDialog}>
            Cancel
          </button>
          <button value="default" onClick={closeDialog}>
            Confirm
          </button>
        </div>
      </dialog>
      <button aria-haspopup="dialog" onClick={showDialog}>Show the dialog</button>
    </>
  );
};
