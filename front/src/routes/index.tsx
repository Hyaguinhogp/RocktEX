import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"
import Register from "../pages/Register"
import AuthenticationPage from "../pages/AuthenticationPage"
const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/post' element={<Post />} />
            <Route path='/register' element={<AuthenticationPage type="register" />} />
            <Route path='/login' element={<AuthenticationPage type="login" />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )
}

export default RoutesMain