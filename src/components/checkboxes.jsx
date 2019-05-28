import React from "react";
import styled from "styled-components";

const Checkboxes = () => {
    return(
        <StyledCheckboxes>
            <h2 className="checkboxes__title">Расскажите о себе чекбоксами</h2>
            <p className="checkboxes__description">Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Кстати, отсутствие опыта не означает, что у вас меньше шансов стать одним из наших товарищей. Это означает, что вы будете получать те задачи, с которыми гарантировано будете справляться.</p>
            <CheckboxesContainer>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked/>
                    <span className="checkboxes__picture"></span>
                    БЭМ/OOCSS
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Pug (Jade)
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Stylus/LESS/SASS
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Работаю с SVG
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Вертаю семантично
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" />
                    <span className="checkboxes__picture"></span>
                    Acessibility (A11Y)
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    ES2015/2016
                </label>    
            </CheckboxesContainer>
            <CheckboxesContainer>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Gulp/GRUNT
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox"  />
                    <span className="checkboxes__picture"></span>
                    Webpack
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox"  />
                    <span className="checkboxes__picture"></span>
                    Дружу с WebGL
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    jQuery
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox"  />
                    <span className="checkboxes__picture"></span>
                    Знаю/изучаю Angular
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Знаю/изучаю React
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Знаю/изучаю Node.js
                </label>    
            </CheckboxesContainer>
            <CheckboxesContainer>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Использую Git
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    С глазомером всё ок
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked/>
                    <span className="checkboxes__picture"></span>
                    Читаю <a href="http://blog.csssr.ru">blog.csssr.ru</a>
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    Я ленивый
                </label>
                <label className="checkboxes__check">
                    <input className="checkboxes__input" type="checkbox" defaultChecked />
                    <span className="checkboxes__picture"></span>
                    У меня хороший английский
                </label>
                        
            </CheckboxesContainer>
            
        </StyledCheckboxes>    

    )
}

const StyledCheckboxes = styled.section`
    width: 100%;
    padding: 30px 0 15px 0;
    display: flex;
    flex-wrap: wrap;

    .checkboxes__title {
        width: 100%;
        text-align: left;
        font-size: 1.5em;
        font-weight: 700;
        line-height: 50px;
        color: #2f1b15;   
    }    
    .checkboxes__description {
        width: 100%;
        font-size: 15px;
        font-weight: 400;
        line-height: 23px;
        color: #3d3d3d;
        padding-bottom: 16px;
    }
    @media screen and (max-width: 960px) {
        
        flex-direction: column;
                 
`;

const CheckboxesContainer = styled.div`
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;

    .checkboxes__check {
        padding: 5px 0 5px 1.2em; 
        font-size: 1.375em;
        font-weight: 700;
        line-height: 25px;
        color: #000;
    }
    .checkboxes__input {
        position: absolute;
        appearance: none;
    }    
    .checkboxes__picture {
        position: absolute;
        margin-left: -1.2em;
        margin-top: 4px;
        width: 19px;
        height: 18px;
        background-image: url("../assets/images/Shape_2.png");
        background-size: contain;
    }    
    .checkboxes__input:checked + .checkboxes__picture::after {
        content: "";
        display: block;
        width: 19px;
        height: 30px;
        margin: -10px 0 0 3px; 
        background-image: url("../assets/images/Marker.png");
        z-index: 9;
    }

    .checkboxes__input:focus + .checkboxes__picture {
        box-shadow: 0 0 1px 2px #999;
    }
    @media screen and (max-width: 960px) {
       
        width 100%;    
            
    }    
`;

export default Checkboxes;