"use client";
import * as React from "react";

export const SingleSelectExample = () => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="single-select">Choose a favorite animal:</label>
      <select
        name="pets"
        id="single-select"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <p>
        Selected value: <span>{selectedValue}</span>
      </p>
    </>
  );
};
