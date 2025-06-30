import React from "react";
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status/>
        <Gender/>
        <Species/>
      </div>
    </div>
  );
};

export default Filters;
