import styled from 'styled-components'

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0.5rem;
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.6;
  font-family: 'Roboto mono', monospace;

  border-bottom: 1px solid var(--gray-400);
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
