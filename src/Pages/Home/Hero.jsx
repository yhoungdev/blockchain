import ContainerLayout from "../../Layouts/ContainerLayout.jsx/ContainerLayout";
import {
  Avatar,
  Box,
  Flex,
  Text,
  Image,
  UnorderedList,

  Button
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from '../../components/Logo';
import LoginButton from '../Auth/AuthLogin';


const Hero = () => {
  return (
    <>
      <Box py="1em"  bg={"black"} bgImage={'https://assets.website-files.com/620e7cf70a42fe89735b1b17/625de5f777c2b224b2bbb792_section-3-background.jpg'}
      bgSize={''}
      position={'relative'} h="100vh" color={"#fff"}>
        <ContainerLayout>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Logo/>

            <Box>
              <Box display={["none", "block"]}>
                <UnorderedList
                  listStyleType="none"
                  display={"inline-flex"}
                  gap={"2em"}
                >
                  <Link to="/login">
                  <Button
                  bg={'#191919'}
                  color={'#fff'}
                  _hover = {{ 
                    backdround: ' #191919'
                  }}

                   > Login </Button>
                  </Link>
                </UnorderedList>
              </Box>

              <Box display={["block", "none"]}>
                 <Link to={'/login'}>
                  <Button
                  bg={'#191919'}
                  color={'#fff'}

                   > Login </Button>
                 </Link>
              </Box>
            </Box>
          </Flex>
          <Flex
            h="80vh"
            my=""
            flexDir={"column"}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Text
                textAlign={"center"}
                fontWeight={"bold"}
                fontFamily={"var(--primary-font)"}
                fontSize={["2em", "4em"]}
                width={["", "70%"]}
                mx={"auto"}
              >
                The Leading Decentralized platform on SmartCHH
              </Text>

              <Text my={"2em"} textAlign={"center"}>
                {" "}
                
                {" "}
              </Text>
            </Box>
                  
            <LoginButton value={'Get Start'}/>

          </Flex>
        </ContainerLayout>

        <Box position={'absolute'} bottom={0} width={['','40%']}>
         <Image src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1659283237/quick/Group_44_gor4ho.svg'} />
        </Box>
    
      </Box>
    </>
  );
};

export default Hero;
