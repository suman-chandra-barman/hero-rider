import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import router from "./router/Route";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
