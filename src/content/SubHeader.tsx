import styled from "styled-components"
import Header from "./Header"

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #000;
  padding: 0 60px;

  ${Header.H3} {
    color: #fff;
  }
`

export default SubHeader