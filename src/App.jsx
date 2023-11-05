import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Table1 from "./components/Table1";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table1" element={<Table1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
