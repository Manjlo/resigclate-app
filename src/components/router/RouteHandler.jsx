import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Login } from '../screens/Login'
import  { Register } from '../screens/Register'

function RouteHandler () {
    return (
        <Routes>
            <Route path="/" element={ <Login />}/>
            <Route path="/register-page" element={ <Register />}/>
        </Routes>  
    )
}

export { RouteHandler };