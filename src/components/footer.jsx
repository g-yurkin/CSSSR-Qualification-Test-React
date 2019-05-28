import React from "react";
import styled from "styled-components";

const Footer = () => {
    return(
        <StyledFooter>
            <span className="data__query">Дата заполнения</span>
            <span className="data__answer">28.05.2019</span>

        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    
        width: 100%;
        padding-top: 50px;
        display: flex;
       
    .data__query {
        font-size: 22px;
        font-weight: 700;
        line-height: 50px;
        color: #2f1b15;
        padding-right: 16px;
    }    
    .data__answer {
        font-family: 'CourierNewPSMT';
        font-size: 30px;
        line-height: 36px;
        padding: 0 16px;
        background-image: url('../assets/images/Horisontal.png');
        background-position 0 6px;
    }    

    @media screen and (max-width: 767px) {
        
        flex-direction: column;     
    }        
`;
export default Footer;