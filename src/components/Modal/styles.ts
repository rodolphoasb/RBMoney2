import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: center;

  h1 {
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: #dadada;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #9ca3af;
  }

  button[type='submit'] {
    background-color: #3ecf8e;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: 0;
    padding: 1.5rem;
    border-radius: 0.25rem;
  }
`

export const TransactionTypeContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

type RadioBoxProps = {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBoxButton = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #9ca3af;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.85, colors[props.activeColor])
      : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: #9ca3af;
  }
`
