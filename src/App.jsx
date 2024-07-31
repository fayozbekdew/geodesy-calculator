import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Calculator from "./pages/Calculator";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="calculate" element={<Calculator />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
export default App;
