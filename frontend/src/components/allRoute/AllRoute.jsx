import React from 'react'
import {Box} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Signup from '../register/Signup'

import Navbar from '../navbar/Navbar'
import Create from '../AddBlog/Create'
const AllRoute = () => {
  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
           
            <Route path="/create" element={<Create/>} />
         
           

        </Routes>
    </Box>
  )
}

export default AllRoute