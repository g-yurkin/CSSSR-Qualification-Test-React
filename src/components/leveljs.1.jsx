import React from "react";
import styled from "styled-components";

const LevelJS = () => {
    return(
        <StyledLevelJS>
            <h2 className="leveljs__title">Уровень владения JavaScript</h2>

            <div className="leveljs__indicator">
                <div className="progress" id="progress">   
                    <div className="marker" id="marker" ></div>
                </div>    
                <div className="first-part">Не владею</div>  
                <div className="second-part">Использую готовые решения</div>
                <div className="third-part">Использую готовые решения и умею их переделывать</div>
                <div className="fourth-part">Пишу сложный JS с нуля</div> 
            </div>
        </StyledLevelJS>
    )
}

const StyledLevelJS = styled.section`
    width: 100%;
    padding: 30px 0 0 0;

    .leveljs__title {
        width: 100%;
        text-align: left;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 50px;
        color: #2f1b15;
    }    
    .leveljs__indicator {
        width: 100%;
        padding-top: 30px;
        background-image: url("../assets/images/Horisontal.png");
        background-repeat: repeat no-repeat;
        display: flex;
        flex-wrap: wrap;
        font-size: 13px;
        font-weight: 700;
        line-height: 20px;
        color: #2f1b15;
        position: relative;
    }    
    
    .marker {
        width: 17px;
        height: 30px;
        background-image: url('../assets/images/Triangle.png'); 
        background-repeat: no-repeat;
        background-position: 0 80%;
        position: absolute;
        top: -5px;
        left: 82%;
        transition: all ease .5s;
    }

    .first-part {
        width: 20%;
        padding-top: 30px;
        background-image: url("../assets/images/Vertical_Long.png");
        background-repeat: no-repeat;
        background-position: 0% 0;
        padding-right: 10px;
        cursor: pointer;   
    }    
    .second-part {
        width: 30%;
        padding-top: 30px;
        background-image: url("../assets/images/Vertical_Short.png");
        background-repeat: no-repeat;
        background-position: -3% 0;      
        padding-right: 10px;
        cursor: pointer;
    }    
    .third-part {
        width: 27%;
        padding-top: 30px;
        background-image: url("../assets/images/Vertical_Short.png");
        background-repeat: no-repeat;
        background-position: -3.5% 0;     
        padding-right: 10px;
        cursor: pointer;
    }    
    .fourth-part {
        width: 23%;
        padding-top: 30px;
        background-image: url("../assets/images/Vertical_Long.png");
        background-repeat: no-repeat;
        background-position: 106.5% 0;
        text-align: right;                  
        padding-left: 10px;
        cursor: pointer;
`;


export default LevelJS;