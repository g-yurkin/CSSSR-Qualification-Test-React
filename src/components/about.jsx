import React from "react";
import styled from "styled-components";

const About = () => {
    return(
        <StyledAbout>
            <h2 className="about__title">Расскажите о себе словами</h2>
            <p className="about__description"> Напишите пару предложений, чем вас привлекла наша вакансия и чего вы ожидаете от работы в CSSSR. Кстати, будет здорово, если при нехватке места для текста строки будут добавляться автоматически.</p>

            <article className="about__story" contentEditable="true">
                <p> Опытный удалёнщик. Работаю так с 2009 года. С тех пор сменил сферу деятельности и специальность, но удалёнка как стиль жизни и способ работы - останется навсегда. Потому что работа это не место, это дело.</p>
                                
            </article>
        </StyledAbout>
    )
}

const StyledAbout = styled.section`
    width: 100%;
    padding: 15px 0;
    display: flex;
    flex-wrap: wrap;

    .about__title {
        width: 100%;
        text-align: left;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 50px;
        color: #2f1b15;
    }    
    .about__description {
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        color: #3d3d3d;
        padding-bottom: 25px; 
    }    
    .about__story {
        width: 100%;
        height: auto;
        border: none;
        font-family: "CourierNewPSMT";
        font-size: 24px;
        font-weight: 400;
        line-height: 60px;
        color: #231f20;
        background-color: transparent;
        background-image: url("../assets/images/Horisontal.png");
        background-position: 0 16px;
        text-indent: 40px;
        overflow: hidden;
    }    
     
    .dirty {
        text-decoration: line-through; 
    }    
    @media screen and (max-width: 767px) {
        .about__story {
            font-size: 20px;
            line-height: 24px;
            background: none;
            text-align: justify;
        }    
            
    }    
`;

export default About;