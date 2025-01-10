import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ProtectedRoute from "@/components/protected-route";
import Dashboard from "@/pages/Dashboard";



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/auth/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Dashboard />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
