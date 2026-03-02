import { createGlobalStyle } from 'styled-components';
import JejuDoldam from '@/assets/fonts/JejuDoldam.ttf.ttf'; // 파일명 오타 확인 필요 (.ttf.ttf)
import OwnglyphFont from '@/assets/fonts/Ownglyph PDH.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'JejuDoldam';
    src: url(${JejuDoldam}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ownglyph';
    src: url(${OwnglyphFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* !important를 제거해야 개별 컴포넌트에서 Ownglyph로 덮어씌울 수 있습니다. */
    font-family: 'JejuDoldam', sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0; 
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    /* body에 기본 폰트를 지정하면 하위 요소로 상속됩니다. */
    font-family: 'JejuDoldam', sans-serif;
  }

  button, input, textarea {
    /* 버튼이나 입력창은 기본 폰트를 상속받지 않는 경우가 많으므로 별도 지정 */
    font-family: 'JejuDoldam', sans-serif;
  }
`;

export default GlobalStyle;