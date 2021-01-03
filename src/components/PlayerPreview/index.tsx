import * as S from './styles'

export type PlayerPreviewProps = {
  avatar: string
  username: string
}

const PlayerPreview = ({ avatar, username }: PlayerPreviewProps) => (
  <S.Wrapper>
    <S.Avatar src={avatar} alt={`Avatar for ${username}`} />
    <h2>{`@${username}`}</h2>
  </S.Wrapper>
)

export default PlayerPreview
