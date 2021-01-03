import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PlayerPreview from '.'

const props = {
  avatar:
    'https://avatars2.githubusercontent.com/u/15898709?s=460&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4',
  username: 'Morpa'
}

describe('<PlayerPreview />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<PlayerPreview {...props} />)

    expect(screen.getByRole('heading', { name: /morpa/i })).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: `Avatar for ${props.username}` })
    ).toHaveAttribute('src', props.avatar)

    expect(container.firstChild).toMatchSnapshot()
  })
})
