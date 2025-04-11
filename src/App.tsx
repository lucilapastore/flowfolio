import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import InvestorTest from "./pages/InvestorTest";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/investortest", element: <InvestorTest /> },
  {},
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
