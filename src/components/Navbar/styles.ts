import styled, { css } from 'styled-components'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} 0;
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`
