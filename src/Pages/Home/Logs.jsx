import ContainerLayout from "../../Layouts/ContainerLayout.jsx/ContainerLayout"

import {Flex , Box ,Image, Text} from '@chakra-ui/react'
const LightBox  = () => {

    const items = [
        {
            title : 'View Project Reviews',
            description : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad corrupti odio dolor. Nihil itaque, nulla facere neque cum quos quisquam doloremque similique voluptate vel harum sequi dignissimos beatae minima?',
            icon : 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1660839661/Rectangle_2_zlue6g.svg',
            width : '15%',
            style : {
                background : 'rgb(220 106 106 / 5%)',
            }
        },
        {
            title : 'Upload Blockchain Project',
            description : 'Upload project to the blockchain and get review from the community and get feedback from the community and people who tests your application on the blockchain to see',
            icon : 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1657319726/secuWallet/Group_28_zlvsir.svg',
            style : {
                background : 'rgb(88 24 255 / 3%)',
            }
        },
        {
            title : 'Decentralized Dex Platform',
            description : 'We are the first decentralized exchange (DEX) on the SmartBCH chaon. Our goal is to become one of the the leading DEXs on SmartBCH, as well as a one-stop',
            icon : 'https://res.cloudinary.com/dhkccnvyn/image/upload/v1659286304/secuWallet/Rectangle_3_hvg6vj.svg',
            style : {
                background : '#fffceb',
            }
        }
    ]

    return (
        <>

            <ContainerLayout>
                <Text my={'2em'} fontWeight={'bold'} fontFamily={'var(--primary-font)'} 
                    textAlign={'center'} 
                    fontSize={['xl','3xl']}
            
                > Know More About Quickk</Text>

                <Box>

                 <Flex flexDir={['column' , 'row']} 
                 gap={['2em']} textAlign={'center'}
                   
                 >
                    {
                        items.map ( (items , index ) => {
                            return (
                                <>
                                

                                    <Box  style={items.style} px={'1em'} py={'1em'}
                                        borderRadius={'10px'}
                                    >
                                        <Image w={['30%',items.width ? items.width : '25%']} src={items.icon} mx={'auto'} />
                                        <Text my={'1em'} fontWeight={'black'}>{items.title}</Text>
                                        <Text>{items.description}</Text>
                                    </Box>
                                
                                
                                </>
                            )
                        })
                    }
                 </Flex>

                </Box>

            </ContainerLayout>
        
        </>
    )

}

export default LightBox