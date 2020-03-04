import styled from 'styled-components'
import React from 'react'

const StyledTextInput = styled.input`
  border: 1px solid #f1f2f3;
  padding: 8px 16px;
`

const StyledLabel = styled.label`
  display: block;
  text-transform: capitalize;
  padding: 5px 0;
`

const TextInput = ({ label, placeholder }) => {
  return (
    <div>
      <StyledLabel for="test-id">{label}:</StyledLabel>
      <StyledTextInput id="test-id" placeholder={placeholder} />
    </div>
  )
}

export default TextInput
