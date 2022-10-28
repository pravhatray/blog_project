import {
  Badge,
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blog from "./images/Blog_logo_Header.jpg";

// const blogs=[
//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71c5KhORFgxGEUp2QEWfAlhtxZJCLvJllYw&usqp=CAU"
//   },
//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr_73Io5m-f4dY4R-UIEvhGOZyDhl4s8y0w&usqp=CAU"
//   },
//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-P9oAIPXYruU6VlZsm7rUDztd2p7RrGK9w&usqp=CAU"
//   },
//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnTcwaeBl69UBgGuEb0cJeDX_Y16uig-Qpg&usqp=CAU"
//   },
//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4B1tAbmyRZpZpkHGU_-E_zVfDhhGjIkNCA&usqp=CAU"
//   },

//   {
//     title:"Using Blogs in the Classroom",
//     content:"Students	are	used	to	writing	and	communicating	in	the	digital	landscape	whether	it	be	Twitter,	FaceBook,	Tumblr,	or	email.	While	reading	their	fellow	students’	blogs	and	comments,	and	responding	online	with	their	own	comments,	students	recognize	the	value	of	clarity	and	what	makes	for	strong	and	engaging	posts.",
//     author:"Author",
//     avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvq1QjhTms1A0MyiML8NAuDI2FuPJ3nHsgiQ&usqp=CAU"
//   }
// ]

const Home = () => {
  const token = JSON.parse(localStorage.getItem("token")) || "";

  const [blogs, setBlogs] = useState([]);

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  useEffect(() => {
    axios.get("http://localhost:8080/posts/all").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  // console.log(blogs[0].userId.name);
  return (
    <>
      <Box mt={2}>
        <Image
          borderRadius={4}
          height={"400px"}
          src={blog}
          objectFit="fill"
          width="100%"
        />
      </Box>
      <Box>
        <Text
          fontSize={"xxx-large"}
          fontWeight="semibold"
          color={"red"}
          fontStyle={"italic"}
        >
          Read Our Blogs
        </Text>
      </Box>
      <SimpleGrid
        bg={"#d1d5db "}
        columns={[1, 2, 3, 2]}
   
        m="auto"
        mt={5}
        p="1%"
      >
        {blogs.map((b) => {
          return (
            <>
              <Box mb={10} >
              <Text fontStyle={"italic"} fontSize={"x-large"} fontWeight="medium">
                  {b.title}
                </Text>
                <Image
                 
                  borderRadius={5}
                w="400px"
                  m={"auto"}
                  src={b.avatar}
                />
              
              </Box>
              <Box m="auto" borderRadius={5}  key={b._id}>
                <Flex >
                  <Image
                    w={"50px"}
                    borderRadius="55%"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU"
                  />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {b.userId.name}
                     
                    </Text>
                    <Badge ml="1" colorScheme="green">
                        {b.created_at.split("T")[0]}
                      </Badge>
                  </Box>
                </Flex>

                <Box>
                  <Text
                    mt={4}
                    textAlign="center"
                    p={"3%"}

                    // overflow="hidden"
                    // textOverflow={"ellipsis"}
                    // whiteSpace="nowrap"
                  >
                    {truncate(b.content, 40)}
                  </Text>
                  <Link to="/readmore"><Text textDecoration={"underline"} color="blue" >Read more....
                    </Text></Link>
                </Box>
              </Box>
            </>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Home;
