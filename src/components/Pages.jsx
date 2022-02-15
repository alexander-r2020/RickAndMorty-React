import React from "react";

function Pages({ prev, next, onPrevious, onNext }) {
  
  const handlePrevious = () => onPrevious();
  const handleNext = () => onNext();

  return (
    <div
      className="btn-group mb-3"
      role="group"
      aria-label="Basic outlined example"
    >
      {prev ? (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handlePrevious}
        >
          Left
        </button>
      ) : null}
      {next ? (
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleNext}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}

export default Pages;
