import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "country/:country",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
