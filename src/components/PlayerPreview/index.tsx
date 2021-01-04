import * as S from './styles'

export type PlayerPreviewProps = {
  avatar: string
  username: string
  label?: string
}

const PlayerPreview = ({ avatar, username, label }: PlayerPreviewProps) => (
  <S.Wrapper>
    {!!label && <h1>{label}</h1>}
    <S.Avatar src={avatar} alt={`Avatar for ${username}`} />
    <h2>{`@${username}`}</h2>
  </S.Wrapper>
)

export default PlayerPreview
