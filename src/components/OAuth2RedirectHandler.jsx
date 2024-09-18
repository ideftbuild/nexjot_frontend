import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import styled from "styled-components";


const OAuth2RedirectHandler = () => {
    const location = useLocation();
    const H1 = styled.h1`
        margin: 0;  
    `

    useEffect(() => {
        // call a function that loads the initial documents
        console.log("redirected to", location);
    }, [location]);

    return (
         <>
             <H1>Loading...</H1>
         </>
    );
}

export default OAuth2RedirectHandler;