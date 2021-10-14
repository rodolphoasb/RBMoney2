import styled from 'styled-components'

export const Container = styled.header`
  background-color: #181818;
  width: 100%;
  height: 250px;
`

export const Content = styled.div`
  display: flex;
  width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #fff;
  }

  button {
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;

    transition: ease-in-out filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`
