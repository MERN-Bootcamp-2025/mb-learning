import React from "react";

const FilterBtn = () => {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="radioDefault"
          id="radioDefault1"
        />
        <label class="btn btn-outline-primary" for="radioDefault1">Single toggle</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="radioDefault"
          id="radioDefault2"
          checked
        />
        <label class="form-check-label" for="radioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
