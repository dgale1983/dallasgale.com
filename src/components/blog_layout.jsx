import React from 'react'
import styled from 'styled-components'
import * as widths from './styles/sizes'
import * as colors from './styles/colors'
import * as spacings from './styles/spacings'

const StyledContainer = styled.div`
  background: ${colors.BLACK};
  color: ${colors.WHITE};
  min-height: 100vh;
  margin: 0 auto;
  padding: ${spacings.twentyFour}
  width: ${widths.MEDIUM};
`

const BlogLayout = (props) => {
  const { children } = props

  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export default BlogLayout
