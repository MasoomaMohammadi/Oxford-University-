import {useRoutes } from "react-router-dom";
import "./index.css";
import router from "./routes";

function App() {
  let routes = useRoutes(router);
  return routes;
}

export default App;
