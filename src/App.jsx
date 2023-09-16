import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import EachCardpage from "./pages/Moviepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "home", element: <Home /> },
    { path: "movies", element: <EachCardpage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
