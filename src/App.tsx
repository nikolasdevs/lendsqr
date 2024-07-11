import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
