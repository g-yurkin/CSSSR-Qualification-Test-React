import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <StyledHeader>
            <HeaderTop>
                <img src="./assets/images/Logo.png" alt="Logo" className="logo"></img>
                <img src="./assets/images/Slogan.png" alt="Slogan" className="slogan"></img>
            </HeaderTop>
            <img src="./assets/images/Delo.png" alt="Title" className="title"></img>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 10px 0;

    .title {
        width: 221px;
        transform: translate(-20px, -10px);
    }

    @media screen and (max-width: 767px) {
        .title {
            width: 110px;
        }         
    }    
`;

const HeaderTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .logo {
       width: 154px;
       height: 52px; 
    }

    .slogan {
        width: 252px;
        height: 106px;
        transform: translate(60px, -10px);
    }

    @media screen and (max-width: 767px) {
        .logo {
            width: 77px;
            height: 26px;
        }        
        .slogan {
            width: 126px;
            height: 53px;
            transform: translate(10px, -30px);
        }              
    }
`;


export default Header;