import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <>
      <Box m="auto">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input  bgColor={"white"} type="text" required="required" placeholder="name " />
          <FormLabel>Email</FormLabel>
          <Input  bgColor={"white"} type="email" required="required" placeholder="email" />
          <FormLabel>Password</FormLabel>
          <Input  bgColor={"white"} type="password" required="required" placeholder="password" />
          <Button colorScheme='orange' w="100%" mt={3} type="submit" >Submit</Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Signup;
