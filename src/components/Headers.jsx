import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, Text, MenuList } from "@chakra-ui/react";
import Buttons from "./Buttons";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {HiOutlineLogout} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Pages/Auth/AuthLogin';


const Header = () => {

    
    
    const { user, isAuthenticated ,  logout} = useAuth0();
    console.log(user)
    const logOut = () => {
        logout({returnTo: window.location.origin})
        window.location.reload()
    };
    return (
        <>

            <Flex justifyContent={'space-between'} py={'1em'}>
                
                
                <Box>
                    Logo
                </Box>



                <Box>
                    


                    {
                        //check if user is authenticated
                        isAuthenticated ? (
                                <>
                                
                                <Menu>
                        <MenuButton>
                            <Flex alignItems={'center'} gap={'1em'}>
                                 <Avatar size={'md'} src={user?.picture}/>
                                 <Text display={['none','block']} fontWeight={'bold'}>Hi,{user.nickname}</Text>
                                 <MdOutlineArrowDropDown size={'2em'}/>
                            </Flex>
                            <MenuList>
                                <MenuItem display={['block','']}>

                                     <Flex  alignItems={'center'} gap={"2"}>
                                     <AiOutlineUser/><Text> {user.name}</Text>
                                    </Flex>

                                </MenuItem>
                                <MenuItem onClick={logOut}>
                                   
                                    <Flex  alignItems={'center'} gap={"2"}>
                                     <HiOutlineLogout/><Text>Logout</Text>
                                    </Flex>
                                </MenuItem>
                            </MenuList>
                        </MenuButton>
                    </Menu>
                                </>
                        ) :

                        (
                            <>
                                <LoginButton />
                            </>
                        )
                    }
                </Box>

            </Flex>

        </>
    )
}


export default Header;