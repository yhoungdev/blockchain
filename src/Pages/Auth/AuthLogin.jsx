import Buttons from "../../components/Buttons"
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();

    return (
        <>
        
            <Buttons value={'Login'}
                onClcik={() => loginWithRedirect()}
            />
        
        </>
    )


}

export default LoginButton