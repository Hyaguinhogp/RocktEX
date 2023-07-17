import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Register from "../pages/Register"
const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/post' element={<Post />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )
}

export default RoutesMain