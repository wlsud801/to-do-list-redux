import React from 'react';
import Button from './style/Button';
import Box from './style/Box'
import Title from './style/Text'
import { Link } from 'react-router-dom';


const Working = ({ item, completeChkBtn, removeBtn }) => {
    return (
        <Box use="sBox" key={item.id}>
            <Title>{item.title}</Title>
            <p>{item.contents}</p>
            {
                // Link는 그냥 a태그랑 똑같이 생겼는데, a와 다른 기능은 state 초기화를 시키지 않음. => 렌더링을 발생시키지 않음.
                <div className="btnWrap">
                    <Button use="link"><Link to={`/${item.id}`}>상세보기</Link></Button>
                    <Button use="btn" bgColor="white" onClick={() => removeBtn(item.id)}>삭제</Button>
                    <Button use="btn" bgColor="var(--primary-color);" onClick={() => completeChkBtn(item.id)}>{item.isDone === false? "완료" : "취소" }</Button>
                </div>
            }
        </Box>
    )
}

export default Working;