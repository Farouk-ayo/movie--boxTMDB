import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Homepage";
import Moviepage from "./pages/Moviepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "home", element: <Home /> },
    { path: "movies/:id", element: <Moviepage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
