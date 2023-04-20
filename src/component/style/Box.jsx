import React from 'react';
import styled from 'styled-components';

const WBox = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    background-color:#fff;
    border-radius: 20px;
    padding: 50px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`
const SBox = styled.div`
    width:31%;
    padding:30px;
    margin-bottom:3.5%;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: .5s;
`
const ListBox = styled.div`
    width:100%;
    display: flex;
    gap:3.5%;
    flex-wrap: wrap;
`

function Box({ use, children, ...rest }){
    switch(use){
        case "wBox" :
            return <WBox {...rest}>{children}</WBox>
        case "sBox" :
            return <SBox {...rest}>{children}</SBox>
        case "list" :
            return <ListBox {...rest}>{children}</ListBox>

    }
    
}

export default Box;