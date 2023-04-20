import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from '../component/style/Button';
import Box from '../component/style/Box'
import Title from '../component/style/Text'
import styled, { css } from "styled-components";
import { getDetailId } from "../redux/modules/counter";
import GlobalStyle from "../component/style/GlobalStyle";

function Detail() {
    // const params = useParams();
    // console.log(params)
    // // params = {
    // //     id : 0
    // // }
    
    // 이거는 홈에서 카드 전체 뿌릴 때 사용한 것
    // const todo = useSelector((state)=> state.counter.work)

    // 이거는 홈에서 카드 하나 선택해서 그것을 디테일 페이지에 뿌릴 때 사용하는 것.
    const todo = useSelector((state)=> state.counter.detail)
    // todo = {id: 0, title: '', contents: '', isDone: false}

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { id } = useParams(); // 뽑을 때 문자형으로 바뀜!

    // 1 + "1" = 2
    useEffect(()=>{
      dispatch(getDetailId(+id))  
    })


  return (
    <>
      <GlobalStyle />
      <div id="wrap">
          <Box use="modal">
              <p>id : {todo.id}</p>
              <Button use="link" onClick={()=>{navigate("/")}}>이전으로</Button>
              <h1>{todo.title}</h1>
              <p>{todo.contents}</p>
          </Box>
      </div>
    </>
  )
}

export default Detail