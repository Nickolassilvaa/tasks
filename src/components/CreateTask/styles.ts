import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;

  label {
    flex: 1;
    border: 1px solid var(--gray-400);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;

    &:focus-within {
      outline: 1px solid var(--purple-light);
      outline-offset: 2px;
    }

    input {
      width: 100%;
      background: transparent;
      border: 0;
      font-size: 1rem;
      color: var(--gray-100);
      line-height: 1.6;

      &:focus {
        outline: 0;
      }

      &::placeholder {
        color: var(--gray-300);
      }

      &:focus::placeholder {
        color: var(--white);
      }
    }
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  border: none;
  border-radius: 4px;
  padding: 0.75rem 0.5rem;

  font-size: 1rem;
  line-height: 1.6;
  cursor: pointer;

  background: var(--purple-dark);
  color: var(--white);

  &:disabled {
    filter: brightness(0.7);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: var(--purple-light);
  }
`
