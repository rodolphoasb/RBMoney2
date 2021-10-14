import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    background-color: #F3F4F6;
  }

  html, body, #__next {
    height: 100%;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: #fff;
    position: relative;
    padding: 3rem;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.7)
    }

    img {
      width: 20px;
    }
  }
`

export default GlobalStyles
