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
import React, { useState } from "react";
import Typical from "react-typical";
import styles from "./Create.module.css"

const Create = () => {

  const token = JSON.parse(localStorage.getItem("token")).token || "";

  const [imageUrl, setImageUrl] = useState("")
  const toast = useToast()
  const [form,setForm] = useState({
    title:"",
    content:"",
     avatar:""
  })

  const handleChange=(e)=>{
    const {name,value,type}=e.target
    
  }


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
            <h1 style={{textDecoration:"underline"}} >
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

      <Box m="auto" mt={"6"} p="5%" w="95%" className={styles.form}   >
        <FormControl>
          <SimpleGrid columns={[1,2,2,2]} gap={["5%","10%"]}>
            <Box>
            <FormLabel textColor={"yellow"}  mb={5}>TITLE</FormLabel>
          <Input mb={5} bgColor={"white"} type="text" required="required" placeholder="Title of the blog " />
          <FormLabel  textColor={"yellow"} mb={5}>PICTURE</FormLabel>
          <Input mb={5} bgColor={"white"} type="file" required="required" placeholder="email" />
          
            </Box>
            <Box >
            <FormLabel  textColor={"yellow"} mb={5}>CONTENT</FormLabel>
              <Textarea textColor={""} height={"150px"} type="text" required="required"  bgColor={"white "} placeholder="Content of the blog" size={"lg"} />
            </Box>
          </SimpleGrid >
          
          <Button  colorScheme='blue' w="56%" mt={["20%","5%"]} type="submit" >Click for Creating Your Blog</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Create;
