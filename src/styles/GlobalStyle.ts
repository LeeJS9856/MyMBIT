import { createGlobalStyle } from 'styled-components';
import JejuDoldam from '@/assets/fonts/JejuDoldam.ttf.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JejuDoldam';
    /* 괄호를 빼고 템플릿 리터럴로 정확히 주입 */
    src: url(${JejuDoldam}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* 폰트 로딩 중에도 글자가 보이게 설정 */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* !important를 붙여서 다른 스타일이 덮어쓰지 못하게 강제 */
    font-family: 'JejuDoldam', sans-serif !important;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    /* 웹 브라우저 전체 배경색 (회색) */
    background-color: #f0f0f0; 
    font-family: 'JejuDoldam', sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;