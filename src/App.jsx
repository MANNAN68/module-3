import Form from "./components/Form";
import "./styles.css";

function App() {
  let statuses = ["empty", "typing", "submitting", "success", "error"];
  return (
    <>
      {statuses.map((status) => (
        <Form key={status} status={status} />
      ))}
    </>
  );
}

export default App;
