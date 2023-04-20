import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
    line-height: 1.5;
  }
  a{
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
    color: #333;
  }
  button{
    cursor:pointer;
    font-family: 'Montserrat','Noto Sans KR', sans-serif;
  }
  #wrap{
    position:relative;
    width:100%;
    min-height:100vh;
    background-color: #f2f3f4d9;
  }
  .contents{
    width:80%;
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }
  header{
    display: flex;
    justify-content:space-between;
    height:100px;
  }
  header h1{
    font-size:3rem;
    font-weight: 900;
    line-height: 40px;
  }  
  header p{
    font-size: 1.2rem;
    line-height: 60px;
  }
  .red{
    color:#f85151;
  }
  :root{
    --primary-color: #f85151;
  }
`;


export default GlobalStyle;