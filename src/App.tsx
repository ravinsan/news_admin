import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import { useSelector } from "react-redux"
import Layout from "./pages/layout/Layout"

function App() {
  const token = useSelector((state) => state.user.token);
  const loginRoute = (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<Login/>} />
    </Routes>
  )
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       {/* <Page /> */}
       {
          token ?
            <>
              <Layout/>
            </>
            :
            loginRoute
        }
    </ThemeProvider>
    </>
  )
}

export default App
