import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme-provider";
import AuthenticationPage from "./pages/auth/login/index";
import 'non.geist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationPage />,
  },
]);

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}
