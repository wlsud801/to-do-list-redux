import React from 'react';
import styled from 'styled-components';

const CmnButton = styled.button`
    /* 공통 스타일 */
    padding: 10px 30px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    background-color: ${(props) => props.bgColor};
    
`

function Button({ children, ...rest }) {
    console.log(rest)
    // {bgColor: 'red', onClick: ƒ}
    const {bgColor} = rest
    const {onClick} = rest
    // return <CmnButton {...rest}>{children}</CmnButton>;
    return <CmnButton bgColor={bgColor} onClick={onClick}>{children}</CmnButton>;
}

export default Button;