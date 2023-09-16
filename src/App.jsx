import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Moviepage from "./pages/Moviepage";
import Homepage from "./pages/Homepage";
import Errorpage from "./pages/Errorpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />,
    },
    { path: "home", element: <Homepage />, errorElement: <Errorpage /> },
    { path: "movies/:id", element: <Moviepage />, errorElement: <Errorpage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
