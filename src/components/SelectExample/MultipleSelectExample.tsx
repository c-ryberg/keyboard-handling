"use client";
import * as React from "react";

export const MultipleSelectExample = () => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedValues(selectedOptions);
  };

  return (
    <>
      <label>
        Please choose one or more pets:
        <select
          name="pets"
          multiple
          size={5}
          value={selectedValues}
          onChange={handleChange}
        >
          <optgroup label="4-legged pets">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
          </optgroup>
          <optgroup label="Flying pets">
            <option value="parrot">Parrot</option>
            <option value="macaw">Macaw</option>
            <option value="albatross">Albatross</option>
          </optgroup>
        </select>
      </label>
      <p>Selected Values: {selectedValues.join(", ")}</p>
    </>
  );
};
