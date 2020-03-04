import styled from 'styled-components'
import React from 'react'

const StyledCodeTapButton = styled.button`
  background: #c00;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  &:disabled {
    opacity: 0.25;
  }
`

const CodeTapButton = ({ disabled, children }) => {
  return (
    <StyledCodeTapButton disabled={disabled}>
      {children}
    </StyledCodeTapButton>
  )
}

export default CodeTapButton
