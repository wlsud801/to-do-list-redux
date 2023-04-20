import React from 'react';
import styled from 'styled-components';

const CmnButton = styled.button`
    width:48%;
    padding: 10px 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => (props.bgColor !== 'white'? 'white' : 'black')};
    border:none;
    border-radius: 10px;
    padding:15px;
    font-size: 0.9rem;
    font-weight: 700;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px inset;
    }
`

const LinkButton = styled.button`
    position: absolute;
    top: 30px;
    right:30px;
    border:none;
    background:none;
    font-size:.9rem;
    font-weight: 700;
    color:#f85151;
`
const SubmitButton = styled.button`
    width:15%;
    border:none;
    border-radius: 10px;
    background-color: #fff;
    font-size:1rem;
    font-weight: 700;
    transition: .2s ;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    
`

function Button({ use, children, ...rest }) {
    switch (use){
        case "btn" :
            return <CmnButton {...rest}>{children}</CmnButton>;
        case "link" :
            return <LinkButton {...rest}>{children}</LinkButton>
        case "submit" :
            return <SubmitButton {...rest}>{children}</SubmitButton>
    }
    
}

export default Button;