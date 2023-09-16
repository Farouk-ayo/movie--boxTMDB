import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Moviepage from "./pages/Moviepage";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    { path: "home", element: <Homepage /> },
    { path: "movies/:id", element: <Moviepage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
