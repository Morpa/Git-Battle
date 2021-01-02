import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Navbar from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ pathname: '/link' }))
}))

describe('<Navbar />', () => {
  it('should render the navbar correctly', () => {
    renderWithTheme(<Navbar />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
    expect(screen.getByText(/battle/i)).toBeInTheDocument()
    expect(screen.getByText(/Popular/i)).toBeInTheDocument()
  })
})
