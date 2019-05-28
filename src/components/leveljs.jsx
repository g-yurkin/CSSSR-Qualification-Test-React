import React from "react";
import styled from "styled-components";


const LevelJS = () => {
    return(
        <StyledLevelJS>
            <h2 className="leveljs__title">Уровень владения JavaScript</h2>
            
            <div className="leveljs__indicator">
                <div className="first-part" onClick={levelLow}>Не владею</div>  
                <div className="second-part" onClick={levelMiddle}>Использую готовые решения</div>
                <div className="third-part" onClick={levelHiMiddle}>Использую готовые решения и умею их переделывать</div>
                <div className="fourth-part" onClick={levelHi}>Пишу сложный JS с нуля</div> 
                <input type="range" min="0" max="100" step="1" defaultValue="82" className="progress" id="progress"></input>
            </div>
        </StyledLevelJS>
    )
}

function levelLow () {
    document.getElementById("progress").value = 3;
}

function levelMiddle () {
    document.getElementById("progress").value = 36;
}
function levelHiMiddle () {
    document.getElementById("progress").value = 60;
}
function levelHi () {
    document.getElementById("progress").value = 95;
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
    .progress {
        position: absolute;
        width: 100%;
        height: 10px;
        margin-top: -20px;
        appearance: none;
        background-color: transparent;
        border: transparent;
        color: transparent;
        outline: none;
        cursor: pointer;
    }
    
    input[type="range"]::-webkit-slider-thumb {
        width: 17px;
        height: 19px;
        cursor: pointer;
        appearance: none;
        background-image: url("../assets/images/Triangle.png");
        background-repeat: no-repeat;
    }

    input[type="range"]::-moz-range-thumb {
        width: 17px;
        height: 19px;
        cursor: pointer;
        border: transparent;
        background-color: transparent;
        background-image: url("../assets/images/Triangle.png");
        background-repeat: no-repeat;
    }
    input[type="range"]::-ms-thumb {
        width: 17px;
        height: 19px;
        cursor: pointer;
        border: transparent;
        background-color: transparent;
        background-image: url("../assets/images/Triangle.png");
        background-repeat: no-repeat;
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