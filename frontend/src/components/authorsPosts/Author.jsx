import {
  Badge,
  Box,
  Code,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthorsPost } from "../../store/post/Post.action";

const Author = () => {
  const data = useSelector((store) => store.post.data);

  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  useEffect(() => {
    dispatch(getAuthorsPost(id));
  }, []);

  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 1]} w={"90%"} m="auto">
        {data?.map((blog) => (
          <Flex key={blog._id} h="180px" gap={15} my={5}>
            <Box w={"70%"} p={2}>
              <Box>
                <Flex gap={5}>
                  <Text
                    _hover={{ cursor: "pointer" }}
                    onClick={() => navigate(`/readmore/${blog._id}`)}
                    fontSize="2xl"
                    fontWeight="500"
                  >
                    {blog.title}
                  </Text>
                  <Badge mt={2} colorScheme="orange">
                    {blog.created_at.split("T")[0]}
                  </Badge>
                </Flex>
                <Text> {truncate(blog.content, 50)}</Text>
              </Box>
              <Text textAlign={"end"}>
                <Code> -- {blog.userId.name}</Code>
              </Text>
            </Box>

            <Box w={"30%"} p={5}>
              <Image maxH={"140px"} w="100%" src={blog.avatar} />
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Author;
