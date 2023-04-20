// 초기 상태값
const initialState = {
    work: [
        { id: 1, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false },
        { id: 2, title: '리액트 공부하기', contents: '리액트를 열심히 공부해봅시다!', isDone: false },
        { id: 3, title: '자바스크립트 공부하기', contents: '자바스크립트를 열심히 공부해보자', isDone: true}
    ],
    detail : {id: 0, title: '', contents: '', isDone: false}
};

// 액션 타입 만들기(실행할 함수 이름)
// 액션 밸류 = 액션 타입
const SET_WORK = 'counter/SET_WORK'
const SWITCH_WORK = 'counter/SWITCH_WORK'
const DELETE_WORK = 'counter/DELETE_WORK'
const GET_DETAIL = 'counter/GET_DETAIL'

// 액션 생성함수 만들기(액션이 동작할 때 실행할 함수) === 바구니 라고 이해하자!
// 할 일 추가하는 바구니
export const setWork = (payload) => {
    return{
        type: SET_WORK,
        payload,
    }
}

// 완료 취소 상태를 전환하기 위한 id를 받아올 바구니
export const switchWork = (payload) => {
    return {
        type: SWITCH_WORK,
        payload
    }
}

// 삭제할 id를 받아올 바구니
export const deleteWork = (payload) => {
    return{
        type: DELETE_WORK,
        payload
    }
}

// Detail 페이지에서 id를 받아올 바구니
export const getDetailId = (payload) => {
    return {
        type: GET_DETAIL,
        payload
    }
}


// 리듀서 : state의 변화를 일으키는 함수
const counter = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORK :
            // 새롭게 추가될 할 일
            // index가 없을 경우를 대비하여 조건문을 만든다.
            // 입력값이 없으면 경고 띄우기! 그 다음 추가되는 것도 막기! => 추가되는 것을 막는다는 뜻은 결국 기존 카드만 다시 보여줘라.
            const id = state.work.length ? state.work[state.work.length - 1].id + 1 : 0;
            const title = action.payload.title;
            const contents = action.payload.contents
            
            // 왜 다시 state를 return 했는가? 결국에는 다시 화면에 뿌려줄 재료가 필요한데 그 재료는 이전에 있던 재료를 다시 쓰겠다.
            if(title==="" || contents===""){
                alert("해야할 일을 입력해주세요")
                return state;
            } else {
                const list = {
                    id,
                    title,
                    contents,
                    isDone: false
                }
                // 계산된 속성 문법 - 동적 속성명
                return {...state, work:[...state.work , list]}
            }

            // useState([...state, newState])
        case SWITCH_WORK:
            // action = {
            //     type: SWITCH_WORK
            //     payload : id
            // }
            const switchWork = state.work.map((ele)=>{
                if(ele.id === action.payload){
                    ele.isDone = !ele.isDone
                }
                return ele
            })
            return {...state, work: switchWork}
        case DELETE_WORK:
            // action = {
            //     type: DELETE_WORK,
            //     payload: id
            // }
            // 지우라는 뜻은 살릴 애들을 고르라는 뜻이다!

            const updatedWork = state.work.filter((ele)=> ele.id !== action.payload)
            return {...state, work: updatedWork}

        case GET_DETAIL:
            // find 메서드 : 일치하는 첫 번째 요소 반환
            // action = {
            //     type: DELETE_WORK,
            //     payload: id
            // }

            const getDetailWork = state.work.find((ele)=> ele.id === action.payload)
            return {...state, detail: getDetailWork}
        default:
            return state;
    }
}

export default counter;