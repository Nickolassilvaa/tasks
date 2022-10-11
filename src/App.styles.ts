import styled from 'styled-components'

export const Container = styled.div`
  max-width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.6;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: 700;

    span {
      background: var(--gray-500);
      padding: 0 0.25rem;
      border-radius: 8px;
      color: var(--gray-800);
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  padding: 2.5rem 0;
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;

  font-family: 'Roboto Mono', monospace;
`
