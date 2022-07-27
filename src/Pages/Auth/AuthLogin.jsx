import Buttons from "../../components/Buttons"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();
    const navigate = useNavigate();

    const login = () => {

        loginWithRedirect()

        setTimeout(() => {
            navigate('/home')
        }, 2000)

    }

    return (
        <>
        
            <Buttons value={'Login'}
                onClick={
                    login

                    
                }
            />
        
        </>
    )


}

export default LoginButton