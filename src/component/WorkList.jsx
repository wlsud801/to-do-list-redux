import React from 'react';
import Button from './style/Button';
import Box from './style/Box'
import { Link } from 'react-router-dom';


const Working = ({ item, completeChkBtn, removeBtn }) => {
    return (
        <Box use="sBox" key={item.id}>
            <p>{item.title}</p>
            <p>{item.contents}</p>
            {
                // item.isDone !== true
                // ? <div className="btnWrap">
                //     <Button bgColor="red" onClick={() => completeChkBtn(item.id)}>완료</Button>
                //     <Button bgColor="white" onClick={() => removeBtn(item.id)}>삭제</Button>


                //     {/* <Button bgColor="red" onClick={() => completeChkBtn(item)}>완료</Button>
                //     <Button bgColor="white" onClick={() => removeBtn(item.id, item.isDone)}>삭제</Button> */}
                // </div>
                // : <div className="btnWrap">
                //     <Button bgColor="red" onClick={() => completeChkBtn(item)}>취소</Button>
                //     <Button bgColor="white" onClick={() => removeBtn(item.id, item.isDone)}>삭제</Button>
                // </div>

                // Link는 그냥 a태그랑 똑같이 생겼는데, a와 다른 기능은 state 초기화를 시키지 않음. => 렌더링을 발생시키지 않음.
                <div className="btnWrap">
                    <Link to={`/${item.id}`}>상세보기</Link>
                    <Button bgColor="white" onClick={() => removeBtn(item.id)}>삭제</Button>
                    <Button bgColor="red" onClick={() => completeChkBtn(item.id)}>{item.isDone === false? "완료" : "취소" }</Button>
                </div>
            }
        </Box>
    )
}

export default Working;