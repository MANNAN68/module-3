import React from "react";

const Form = ({ status }) => {
  if (status === "success") return <h1>That's right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button
          id="button"
          disabled={status === "empty" || status === "submitting"}
        >
          Submit
        </button>
        {status === "submitting" && <p id="loading">Loading...</p>}
        {status === "error" && <p className="Error">There was an error</p>}
      </form>
    </>
  );
};

export default Form;
