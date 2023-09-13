import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Post from "../pages/Post"
import AuthenticationPage from "../pages/AuthenticationPage"
import Profile from "../pages/Profile"
const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/register' element={<AuthenticationPage type="register" />} />
            <Route path='/login' element={<AuthenticationPage type="login" />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )
}

export default RoutesMain