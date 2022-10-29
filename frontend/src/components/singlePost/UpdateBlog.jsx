import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    useDisclosure,
    Button,
    Textarea,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { EditIcon } from '@chakra-ui/icons'

const UpdateBlog = ({id,
    userId,
    handleUpdateBlog}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [post, setPost] = useState()


  return (
   <>
   <Button onClick={onOpen}><EditIcon /></Button>

<Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Update Post Content</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <Textarea minH={"200px"} placeholder="type your content here" onChange={(e) => setPost({ content: e.target.value })} />
        </ModalBody>

        <ModalFooter>
            <Button m={"auto"} colorScheme='blue' mr={3} onClick={() => handleUpdateBlog(id, userId, post,onClose)}>
                Update post
            </Button>
        </ModalFooter>
    </ModalContent>
</Modal>
   </>
  )
}

export default UpdateBlog