import React from 'react'
import styled from 'styled-components'
import { Header } from "../index"

const CleanButton = styled.button`
  /* Reset Button CSS */
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;
`
const Wrapper = styled(CleanButton)`
  width: 200px;
  height: 90px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
  border-radius: 5px;
  cursor: pointer;

  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-column-gap: 20px;

  & > svg {
    padding-left: 20px;
  }
`

const Text = styled(Header.H5)`
  text-transform: uppercase;
  font-weight: 800;
  margin: 0;
  text-align: left;
`

const Shortcut = ({ icon, text }: { icon: any, text: string }) => (
  <Wrapper>
    {icon}
    <Text>{text}</Text>
  </Wrapper>
)

export default Shortcut