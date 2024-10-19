import React from "react";

const Form = () => {
  if (status === "success") return <h1>That's right!</h1>;
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      <form>
        <textarea></textarea>
        <br />
        <button>Submit</button>
        <p id="loading">Loading...</p>
        <p className="Error">There was an error</p>
      </form>
    </>
  );
};

export default Form;
