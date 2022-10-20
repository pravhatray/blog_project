import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <>
    <Box m="auto">
        <FormControl>
          
          <FormLabel>Email</FormLabel>
          <Input  bgColor={"white"} type="email" required="required" placeholder="email" />
          <FormLabel>Password</FormLabel>
          <Input  bgColor={"white"} type="password" required="required" placeholder="password" />
          <Button colorScheme='blue' w="100%" mt={3} type="submit" >Submit</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Login;
