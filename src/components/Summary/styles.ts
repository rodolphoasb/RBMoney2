import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: -7rem;

  div {
    background: #2a2a2a;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    color: #ddd;
    min-height: 150px;

    &:last-child {
      background-color: #3ecf8e;
      color: #fff;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-weight: 400;
      }

      img {
        width: 25px;
      }
    }

    strong {
      display: block;
      margin-top: 2rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }
  }
`
