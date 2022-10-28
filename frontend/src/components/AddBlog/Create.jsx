import {
  Box,
  Flex,
  Hide,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import Typical from "react-typical";
import styles from "./Create.module.css";

const Create = () => {
  const token = JSON.parse(localStorage.getItem("token")).token || "";

  const [imageUrl, setImageUrl] = useState("");
  const [title,setTitle]=useState("")
const [content,setContent]=useState("")
  const toast = useToast();
  const [form, setForm] = useState({
    title: "",
    content: "",
    avatar: "",
  });


var img;

  const postDetails = (imageUrl) => {

    if (imageUrl === undefined) {
      toast({
        title: "Please seclect an Image!",
        description: "warning",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (imageUrl.type === "image/jpeg" || imageUrl.type === "image/png" || imageUrl.type === "image/jpg") {
      const data = new FormData();
      data.append("file", imageUrl);
      data.append("upload_preset", "data-storage");
      data.append("cloud_name", "dztva4gbe");
      fetch("https://api.cloudinary.com/v1_1/dztva4gbe/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.url.toString());
          console.log(data);
          console.log(data.url.toString())
          return {
            data:data.url.toString()

          }
        })
        .catch((er) => {
          console.log(er);
        });
    } else {
      toast({
        title: "Please seclect an Image!",
        description: "wraning",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/posts", {title:title,content:content,avatar:imageUrl}, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        toast("Blog created ");
      });
  };

  return (
    <>
      <Box bg={"#fae8ff "}>
        <Text fontSize={"xl"} fontWeight="medium" color={"teal"}>
          Welcome!!!
        </Text>
        <Text fontSize={"xl"} fontWeight="medium" color={"teal"}>
          Please Create your Blog
        </Text>
      </Box>

      <Box bg={"#fae8ff "}>
        <Hide below="md">
          <Text fontWeight="normal" fontSize="1.5rem" color={"orange"}>
            <h1 style={{ textDecoration: "underline" }}>
              <Typical
                loop={Infinity}
                steps={[
                  "Blogging is good for your career. A well-executed blog sets you apart as an expert in your field.",
                  2500,
                  "Don’t say anything online that you wouldn’t want plastered on a billboard with your face on it",
                  2500,
                  "I’m a big believer in just getting it out there: create a minimal viable product or website, launch it",
                  2500,
                ]}
              />
            </h1>
          </Text>
        </Hide>
      </Box>

      <Box m="auto" mt={"6"} p="5%" w="95%" className={styles.form}>
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={[1, 2, 2, 2]} gap={["5%", "10%"]}>
            <Box>
              <FormLabel textColor={"yellow"} mb={5}>
                TITLE
              </FormLabel>
              <Input
                mb={5}
                bgColor={"white"}
                type="text"
                required="required"
                placeholder="Title of the blog "
                onChange={(e)=>setTitle(e.target.value)}
                name="title"
                
              />
              <FormLabel textColor={"yellow"} mb={5}>
                PICTURE
              </FormLabel>
              <Input
                mb={5}
                bgColor={"white"}
                type="file"
                required="required"
              
                onChange={(e)=>postDetails(e.target.files[0])}
                name="avatar"
              />
            </Box>
            <Box>
              <FormLabel textColor={"yellow"} mb={5}>
                CONTENT
              </FormLabel>
              <Textarea
                textColor={""}
                height={"150px"}
                type="text"
                required="required"
                bgColor={"white "}
                placeholder="Content of the blog"
                size={"lg"}
                onChange={(e)=>setContent(e.target.value)}
                name="content"
              
              />
            </Box>
          </SimpleGrid>

          <Button colorScheme="blue" w="56%" mt={["20%", "5%"]} type="submit">
            Click for Creating Your Blog
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Create;
