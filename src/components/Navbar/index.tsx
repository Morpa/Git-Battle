import MenuOptions from 'components/MenuOptions'

import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <MenuOptions link="/" linkName="Home" />
    <MenuOptions link="/battle" linkName="Battle" />
    <MenuOptions link="/popular" linkName="Popular" />
  </S.Wrapper>
)

export default Navbar
