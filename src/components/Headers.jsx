import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, Text, MenuList } from "@chakra-ui/react";
import Buttons from "./Buttons";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {HiOutlineLogout} from 'react-icons/hi'
const Header = () => {
    return (
        <>

            <Flex justifyContent={'space-between'} py={'1em'}>
                
                
                <Box>
                    Logo
                </Box>


                <Box>
                    <Menu>
                        <MenuButton>
                            <Flex alignItems={'center'}>
                                 <Avatar size={'md'}/>
                                 <MdOutlineArrowDropDown size={'2em'}/>
                            </Flex>
                            <MenuList>
                                <MenuItem>
                                    <Flex alignItems={'center'} gap={"2"}><HiOutlineLogout/><Text>Logout</Text></Flex>
                                </MenuItem>
                            </MenuList>
                        </MenuButton>
                    </Menu>
                </Box>

            </Flex>

        </>
    )
}


export default Header;