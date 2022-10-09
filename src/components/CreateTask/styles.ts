import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  gap: 0.5rem;

  div {
    flex: 1;
    border: 1px solid var(--gray-400);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;

    input {
      width: 100%;
      background: transparent;
      border: 0;
      font-size: 1rem;
      color: var(--gray-100);
      line-height: 1.6;

      &::placeholder {
        color: var(--gray-100);
      }
    }
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border: none;
  border-radius: 4px;
  padding: 0.75rem 0.5rem;

  font-size: 1rem;
  line-height: 1.6;
  cursor: pointer;

  background: var(--gray-100);
  color: var(--gray-700);

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
`
