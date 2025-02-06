"use client";

import * as React from "react";

export const FormExample = () => {
  const [form, setForm] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const formEntries = Array.from(formData.entries());
    setForm(JSON.stringify(formEntries, null, 2));
  };

  const handleReset = () => {
    setForm("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>All fields are required</p>
        <label>
          First Name:
          <input required type="text" name="firstName" />
        </label>
        <br />
        <label>
          Favorite number:
          <input
            required
            type="number"
            name="favoriteNumber"
            min="10"
            max="100"
          />
        </label>
        <br />
        <fieldset>
          <legend>Do you like Piña Coladas?</legend>
          <label>
            <input required type="radio" name="radio" value="yes" /> Yes
          </label>
          <label>
            <input required type="radio" name="radio" value="no" /> No
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
      <div>Submitted Form: {form}</div>
    </>
  );
};
