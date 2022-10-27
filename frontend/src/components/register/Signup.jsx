import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignup } from "../../store/auth/Auth.action";

const Signup = () => {
  const [form,setForm]=useState({name:"",email:"",password:"",role:""})
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
  dispatch(userSignup(form))
  console.log(form);

}

  return (
    <>
      <Box m="auto">
        <form onSubmit={handleSubmit}>
          <FormLabel>Name</FormLabel>
          <Input onChange={handleChange}  value={form.name}  name="name" bgColor={"white"} type="text" required="required" placeholder="name " />
          <FormLabel>Email</FormLabel>
          <Input onChange={handleChange}  value={form.email}  name="email" bgColor={"white"} type="email" required="required" placeholder="email" />
          <FormLabel>Password</FormLabel>
          <Input onChange={handleChange}  value={form.password}  name="password" bgColor={"white"} type="password" required="required" placeholder="password" />
          <select onChange={handleChange}  value={form.role}  name="role" >
            <option>Select role</option>
            <option value="User">USER</option>
            <option value="Writer">WRITER</option>
          </select>
          <Button colorScheme='orange' w="100%" mt={3} type="submit" >Submit</Button>
        </form>
      </Box>
    </>
  );
};

export default Signup;
