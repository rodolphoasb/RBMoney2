import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0rem 1rem;
  }

  th {
    font-weight: 400;
    color: #9ca3af;
    text-align: left;
    line-height: 1.5rem;
    padding: 1.5rem 2rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: #2a2a2a;
    color: #ddd;

    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
      font-weight: 500;
    }

    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }

    &.income {
      color: #3ecf8e;
    }

    &.expense {
      color: #ef4444;
    }
  }
`
