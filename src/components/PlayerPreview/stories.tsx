import { Story, Meta } from '@storybook/react/types-6-0'
import PlayerPreview, { PlayerPreviewProps } from '.'

export default {
  title: 'PlayerPreview',
  component: PlayerPreview,
  args: {
    avatar:
      'https://avatars2.githubusercontent.com/u/15898709?s=460&u=86fabb155a6cbb5dc2be016ce890a81e583fdd10&v=4',
    username: 'Morpa'
  }
} as Meta

export const Default: Story<PlayerPreviewProps> = (args) => (
  <PlayerPreview {...args} />
)
