import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blogs from "./components/Blogs"
import CreateBlog from "./components/CreateBlog"
import Update from "./components/Update"


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Blogs />} />
    <Route path="/create" element={<CreateBlog />} />
    <Route path="/edit/:id" element={<Update />} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App