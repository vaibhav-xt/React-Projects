import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2"
import Page3 from "./Page/Page3"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={Page1} />
        <Route path="/page2" Component={Page2} />
        <Route path="/page3" Component={Page3} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
