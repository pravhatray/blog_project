import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../store/auth/Auth.action";
import Draw from "../register/Draw";
import logo from "./images/blog_logo.jpg";

const Navbar = () => {
  const username = useSelector((store) => store.auth);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("localtoken", token);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Flex justifyContent={"space-between"} p="1%" bg={"black"}>
        <Flex gap={3}>
          <NavLink to="/">
            <Image src={logo} w="80px" borderRadius={4} />
          </NavLink>
          <NavLink to="/create">
            <Button colorScheme={"red"}>Start Blogging</Button>
          </NavLink>
        </Flex>

        {username.token ? (
          <>
            <Flex alignItems={"center"} gap="30px">
              <Text color={"white"}>Welcome,{token.user}</Text>
              <Button onClick={handleLogout}>LOGOUT</Button>
            </Flex>
          </>
        ) : (
          <Box>
            <Draw />
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Navbar;
