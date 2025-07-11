import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Homepage from "./pages/Homepage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { useColorModeValue } from "@/components/ui/color-mode"
const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("grey.900", "gray.800")}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}
export default App