// if(module.hot)
// {
//     module.hot.accept();
// }

import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import App from "./App.js";

let root = createRoot(document.getElementById("root"));

root.render(<App />);
