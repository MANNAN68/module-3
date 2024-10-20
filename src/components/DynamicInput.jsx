import { useState } from "react";

const DynamicInput = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);
  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };
  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id}>
          <input type="text" label={input.label} />
        </div>
      ))}
      <button style={{ marginTop: "20px" }} onClick={handleAddInput}>
        Add
      </button>
    </div>
  );
};

export default DynamicInput;
