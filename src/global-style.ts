import { createGlobalStyle } from 'styled-components'
import { FontWeights, Colors, FontSizes} from './lib/style-guide'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  body, input {
    font-family: proxima-nova, sans-serif;
    font-weight: ${FontWeights.PR};
    font-size: 14px;
    line-height: 1.4rem;
    letter-spacing: 0.5px;
    color: ${Colors.TX1};
  }

  svg, img {
    display: block;
  }

  #root {
    display: flex;
    min-height: 100vh;
    background: ${Colors.BG3};
    justify-content: center;
    align-items: center;
  }
  .text-center{
    text-align : center;  
  }
  .d-flex{
    display : flex;
  }
  .title-a{
    ${FontSizes.medium};
    color : ${Colors.TX2};
    line-height: 20px;
  }
  .title-b{
    ${FontSizes.medium};
    color : ${Colors.TX3};
    line-height: 20px;
  }
  .title-c{
    ${FontSizes.medium};
    color : #4991E5;
    line-height: 20px;
  }
`
