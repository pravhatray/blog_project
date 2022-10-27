import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useDisclosure,
    Input,
    Button,
 
    Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Text
  } from '@chakra-ui/react'
import Signup from './Signup'
import Login from './Login'

const Draw = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const colors = useColorModeValue(
    ['red.50',  'blue.50'],
    ['red.900',  'blue.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]

  return (
    <Box>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
      Register as a Blogger
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          
          <Tabs onChange={(index) => setTabIndex(index)} bg={bg}  variant='enclosed' height="full">
      <TabList>
        <Tab   _selected={{ color: 'white', bg: 'red.300' }}><Text fontSize={"xl"}  >
          Signup
          </Text></Tab>
     
        <Tab _selected={{ color: 'white', bg: 'blue.400' }}><Text fontSize={"xl"}  >
          Login
          </Text></Tab>
      </TabList>
      <TabPanels p='2rem'>
        <TabPanel><Signup/></TabPanel>
     
        <TabPanel><Login/></TabPanel>
      </TabPanels>
    </Tabs>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Draw