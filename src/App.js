import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <h1>How would you like to create your character?</h1>
      <button>Classic method</button>
      <button>Point Buy method</button>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
