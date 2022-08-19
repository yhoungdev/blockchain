import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, Text, MenuList } from "@chakra-ui/react";
import Buttons from "./Buttons";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import {HiOutlineLogout} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from '../Pages/Auth/AuthLogin';
import MainLogo from "./MainLogo";


const Header = () => {

    
    
    const { user, isAuthenticated ,  logout} = useAuth0();
    if(isAuthenticated) {
        localStorage.setItem('userName', user.name)
    }
    const logOut = () => {
        logout({returnTo: window.location.origin})
        setTimeout(()=> {
            window.location.reload()
        }, 2000)
        console.log('logged ')
    };
    return (
        <>

            <Box px={['','10em']} mb={'1em'} bg={'#fdfdfdc2'} >
            <Flex justifyContent={'space-between'} mb={'2em'} py={'0.5em'} bg={'#fdfdfdc2'}>
                
                
                <Box>
                        
                    <MainLogo/>

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
                                <MenuItem display={['block','']} >

                                     <Flex  alignItems={'center'} gap={"2"}>
                                     <AiOutlineUser/><Text> {user.name}</Text>
                                    </Flex>

                                </MenuItem>
                               
                                <MenuItem onClick={() => alert('Kagebunshin')} color={'red'}>
                                  
                                    <Flex  alignItems={'center'} gap={"2"} cursor={"pointer"} >
                                         <HiOutlineLogout/><Text  onClick={ e => console.warn('no error') }>Logout</Text>
                                    </Flex>
                            
                                </MenuItem>
                            </MenuList>
                        </MenuButton>
                    </Menu>
                                </>
                        ) :

                        (
                            <>
                                <LoginButton value={'Login'} />
                            </>
                        )
                    }
                </Box>

            </Flex>
            </Box>

        </>
    )
}


export default Header;