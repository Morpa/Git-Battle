import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    max-width: 50rem;
    color: ${theme.colors.white};
  `}
`
export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 15rem;
    border-radius: 50%;
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
