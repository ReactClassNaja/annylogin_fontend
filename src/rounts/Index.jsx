import React, {useEffect, useState} from 'react'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'

export default function index() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    useEffect(() =>{
        axios({
            url: 'http://localhost:3000/isLoggedIn',
            method: 'post',
            withCredentials: true
        }).then(res => {
            // console.log(res.data)
            if(res.data.status ===200){
                setisLoggedIn(true)
            }
        })
    }, [])

   
  return (
    <div> <React.StrictMode>
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path='/profile' element={<Profile isLoggedIn={isLoggedIn}/>} />
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  </div>
  )
}
