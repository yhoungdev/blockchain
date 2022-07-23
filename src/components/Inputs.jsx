import { Input , FormControl } from "@chakra-ui/react"

const Inputs = ({
    type, placeholder , onChange , value 
}) => {


        
              return  (
                <>

                    <FormControl my={'1em'}>
                      <Input variant={'filled'} py={'1.5em'} placeholder={placeholder} type={ type}  />
                    </FormControl>
                
                </>
              )
        


}

export default Inputs 