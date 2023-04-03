import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../views/Login'
import Admin from '../views/Admin'
import Master from '../views/Master'
import User from '../views/User'



export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/user' element={<User/>}></Route>

            <Route path='/admin' element={<Admin/>}></Route>

            <Route path='/master' element={<Master />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

