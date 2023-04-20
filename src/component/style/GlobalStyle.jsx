import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat','Noto Sans KR', sans-serif;;
    line-height: 1.5;
  }
  #wrap{
    width:100%;
    min-height:100vh;
    background-color: #f2f3f4;
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
    color:#f85151
  }
`;


export default GlobalStyle;