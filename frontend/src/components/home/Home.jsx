import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import blog from "./images/Blog_logo_Header.jpeg"

const Home = () => {
  return (
   <>
    <Box > 
      <Image height={"500px"} src={blog} objectFit="fill"  width="100%"  />
    </Box>
   </>
  )
}

export default Home