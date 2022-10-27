import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/auth/Auth.action";

const Login = () => {

  const [form,setForm]=useState({email:"",password:""})
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    const {name,value}=e.target

    setForm({
      ...form,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(userLogin(form))
    console.log(form);
  }








  return (
    <>
    <Box m="auto">
        <form  onSubmit={handleSubmit}>
          
          <FormLabel>Email</FormLabel>
          <Input onChange={handleChange}  value={form.email} name="email"     bgColor={"white"} type="email" required="required" placeholder="email" />
          <FormLabel>Password</FormLabel>
          <Input  onChange={handleChange}  value={form.password} name="password"    bgColor={"white"} type="password" required="required" placeholder="password" />
          <Button colorScheme='blue' w="100%" mt={3} type="submit" >Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
