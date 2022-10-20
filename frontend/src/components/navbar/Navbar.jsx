import { Box, Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Draw from '../register/Draw'
import logo from "./images/blog_logo.jpg"

const Navbar = () => {
  return (
    <>
     <Flex justifyContent={"space-between"} p="1%" bg={"black"} >
      <Flex gap={3}>
      <NavLink to="/"  >
        <Image  src={logo} w="80px"  borderRadius={4} />
         </NavLink>
         <Button colorScheme={"red"}>Start Blogging</Button>
      </Flex>
  
      <Box>
    <Draw/>
      </Box>
       
      

    </Flex>
    </>
   
  )
}

export default Navbar