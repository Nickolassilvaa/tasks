import styled from 'styled-components'

interface CheckedProps {
  check: boolean
}

export const Container = styled.div<CheckedProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  padding: 0.75rem 0.5rem;
  background: var(--gray-700);
  border-radius: 4px;

  input[type='checkbox'] {
    width: 1.25rem;
    height: 1.25rem;
  }

  label {
    flex: 1;
    margin-left: 1rem;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => (props.check ? 'var(--gray-500)' : 'var(--white)')};

    text-decoration: ${(props) => (props.check ? 'line-through' : 'none')};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    padding: 0.25rem;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--gray-100);

    transition: color 0.2s;

    &:hover {
      color: var(--white);
      background: var(--gray-600);
    }
  }
`
