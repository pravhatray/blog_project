import React from 'react'
import {Box} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Signup from '../register/Signup'

import Navbar from '../navbar/Navbar'
import Create from '../AddBlog/Create'
import Author from '../authorsPosts/Author'
import ReadMore from '../singlePost/ReadMore'
import Chat from '../chat/Chat'
const AllRoute = () => {
  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/authorsposts" element={<Author/>} />
            <Route path="/readmore/:id" element={<ReadMore/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/chat" element={<Chat/>} />
   </Routes>
    </Box>
  )
}

export default AllRoute