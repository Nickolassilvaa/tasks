import Lottie from 'react-lottie'
import Empty from '../../assets/lottie/emptyJSON.json'
import { Container } from './styles'

export function EmptyTask() {
  const defautOption = {
    loop: true,
    autoplay: true,
    animationData: Empty,
  }
  return (
    <Container>
      <Lottie options={defautOption} height={500} />
    </Container>
  )
}
