import React, { useRef, useState, useSyncExternalStore } from 'react';
import Working from '../component/WorkList';
import "../pages/Home.css";
import GlobalStyle from '../component/style/GlobalStyle';
import Box from '../component/style/Box'
import Button from '../component/style/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setWork, switchWork, deleteWork } from '../redux/modules/counter';

const Home = () => {
  //state 연결해주기
  // Work 에는 추가하기 버튼을 눌러서 추가한 목록이 담겨있음.
  const Work = useSelector((state) => state.counter.work)
  const dispatch = useDispatch();

  // 입력 받은 값을 저장해두는 State
  const [listInfo, setListInfo] = useState({ title: '', contents: '' });

  // 입력받은 값을 listInfo state에 저장 해주기 // 계산된 속성 문법 - 동적 속성명
  const addInputHandler = (e) => {
    setListInfo({ ...listInfo, [e.target.name]: e.target.value })
    // setListInfo({ title: '', contents: '', [e.target.name]: e.target.value })
  }

  // dispatch를 사용해서 reducer가 보낸 액션 함수에 담기
  const registerBtn = () => {
    console.log(listInfo)
    dispatch(setWork(listInfo))
    setListInfo({title:'', contents:''})
  }

  // 완료 OR 완료취소 버튼
  const completeChkBtn = (id) => {
    dispatch(switchWork(id))
  }

  // 삭제하기 버튼
  const removeBtn = (id) => {
    dispatch(deleteWork(id))
  }

  return (
    <>
      <GlobalStyle />
      <div id="wrap">
        <div className='contents'>
          <header>
            <h1><span className="red">To do</span> List.</h1>
            <p>React.js</p>
          </header>
          <article>
            <Box use="wBox" className="register">
              <label htmlFor='title' className="red">제목</label><input name="title" onChange={addInputHandler} value={listInfo.title} placeholder="제목을 입력하세요" autoFocus />
              <label htmlFor='contnets' className="red">내용</label><input name="contents" onChange={addInputHandler} value={listInfo.contents} placeholder="내용을 입력하세요" />
              <Button bgColor="var(--primary-color);" type='submit' use="submit" onClick={registerBtn}>추가하기</Button>
            </Box>
            <h2>Working</h2>
            <Box use="list" className="list">
              {
                Work.filter((item) => item.isDone === false).map((item) => {
                  return (<Working key={item.id} item={item} completeChkBtn={completeChkBtn} removeBtn={removeBtn} />)
                })
              }
            </Box>
            <h2>Done</h2>
            <Box use="list" className="list">
              {
                Work.filter((item) => item.isDone === true).map((item) => {
                  return (<Working key={item.id} item={item} completeChkBtn={completeChkBtn} removeBtn={removeBtn} />)
                })
              }
            </Box>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;