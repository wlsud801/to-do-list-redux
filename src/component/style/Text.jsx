import React from 'react';
import { Children } from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-size:1.5rem;
    font-weight: 700;
`
function TitleP({children, ...rest}){
    return <Title {...rest}>{children}</Title>;
}

export default TitleP;