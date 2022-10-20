import React from 'react'
import {Box} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Signup from '../register/Signup'

import Navbar from '../navbar/Navbar'
const AllRoute = () => {
  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
         
           

        </Routes>
    </Box>
  )
}

export default AllRoute