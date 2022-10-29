import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UpdateBlog from "./UpdateBlog";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteAuthorsPost, updateAuthorsPost } from "../../store/post/Post.action";

const ReadMore = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate=useNavigate()

  const token = JSON.parse(localStorage.getItem("token")) || "";
  let writerId;
  const [singleBlog, setSingleBlog] = useState({});

  const getSinglePost = async (id) => {
    let res = await axios.get(`http://localhost:8080/posts/single/${id}`);
    return res;
  };

  useEffect(() => {
    getSinglePost(id).then((res) => {
      setSingleBlog(res.data);
    });
  }, []);

  // console.log(token,"token")
  // console.log("single",singleBlog.userId)

  const handleDeleteBlog = (id, writerId) => {
    dispatch(deleteAuthorsPost(id,writerId))
    toast({
      title: "Post Deleted successfully",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "top"
  })
  setTimeout(() => {
      navigate("/authorsposts")
  }, 2000)
  };

  const handleUpdateBlog = (id, userId, post, onClose) => {
    dispatch(updateAuthorsPost(id, userId, post))
    onClose()
    toast({
      title: "Post Content updated successfully",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "top"
  })
  };

  return (
    <>
      <Box mb={"10%"}>
        <Heading my={5}>{singleBlog.title}</Heading>

        <Image m={"auto"} maxH={"400px"} w="80%" src={singleBlog.avatar} />
        <Text
          mt={5}
          fontFamily="source-serif-pro, Georgia, Cambria, serif;"
          fontSize={"xl"}
        >
          {singleBlog.content}
        </Text>

        {token._id === singleBlog.userId ? (
          <Flex justify={"right"} gap={10} my={10}>
            <UpdateBlog
              id={singleBlog._id}
              userId={token.id}
              handleUpdateBlog={handleUpdateBlog}
            />
            <Button>
              <DeleteIcon
                size={"sm"}
                _hover={{ cursor: "pointer" }}
                boxSize={7}
                onClick={() => handleDeleteBlog(singleBlog._id, token._id)}
              />
            </Button>
          </Flex>
        ) : null}
      </Box>
    </>
  );
};

export default ReadMore;
