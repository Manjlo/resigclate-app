import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { Login } from '../screens/Login'
import  { Register } from '../screens/Register'
import { Geoviewer } from '../screens/Geoviewer'

function RouteHandler () {
    return (
        <Routes>
            <Route path="/" element={ <Login />}/>
            <Route path="/register-page" element={ <Register />}/>
            <Route path='/geovisor-resigcla' element={ <Geoviewer/> }/>
        </Routes>  
    )
}

export { RouteHandler };