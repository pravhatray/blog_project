import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import blog from "./images/Blog_logo_Header.jpg"

const blogs=[
  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71c5KhORFgxGEUp2QEWfAlhtxZJCLvJllYw&usqp=CAU"
  },
  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr_73Io5m-f4dY4R-UIEvhGOZyDhl4s8y0w&usqp=CAU"
  },
  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-P9oAIPXYruU6VlZsm7rUDztd2p7RrGK9w&usqp=CAU"
  },
  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnTcwaeBl69UBgGuEb0cJeDX_Y16uig-Qpg&usqp=CAU"
  },
  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4B1tAbmyRZpZpkHGU_-E_zVfDhhGjIkNCA&usqp=CAU"
  },

  {
    title:"Using Blogs in the Classroom",
    content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
    author:"Author",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvq1QjhTms1A0MyiML8NAuDI2FuPJ3nHsgiQ&usqp=CAU"
  }
]



const Home = () => {
  return (
   <>
    <Box mt={2} > 
      <Image borderRadius={4} height={"400px"} src={blog} objectFit="fill"  width="100%"  />
    </Box>
    <Box>
      <Text fontSize={"xxx-large"}  fontWeight="semibold"  color={"red"} fontStyle={"italic"} >Read Our Blogs</Text>
    </Box>
    <SimpleGrid bg={"#d1d5db "}  columns={[1,2,3,2]} gap="30px" m="auto" mt={4} p="1%">
      {
        blogs.map((b)=>{
          return (
            <>
            <Box  borderRadius={5}  >
              <Flex justifyContent={"space-evenly"} alignItems="center" mt={5}>
              <Text fontSize={"x-large"} fontWeight="medium" >{b.title}</Text>
              <Text fontSize={"large"}  fontStyle={"italic"}>{b.author}</Text>
              </Flex>
              
            
            <Image width={"80%"}  borderRadius={5} height="60%"  m={"auto"} src={b.avatar}/>
         
            <Text mt={4}  textAlign="center" p={"3%"} overflow="hidden"
                        textOverflow={"ellipsis"}
                        whiteSpace="nowrap"  > {b.content} </Text>
            </Box>
           

            </>
          )
        })
      }
    </SimpleGrid>
   </>
  )
}

export default Home