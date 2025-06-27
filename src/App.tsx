import { Routes, Route } from "react-router-dom";
import StorePage from "./pages/StorePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StorePage />} />
    </Routes>
  );
}
