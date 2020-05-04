import styled from "styled-components"

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0;
`

export const BigButton = styled.button`
  background: #84a98c;
  border: none;
  padding: 0.8em 1.2em;
  color: white;
  letter-spacing: 0.2em;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background: #abccb2;
  }
  :active {
    background: #333333;
    color: #84a98c;
  }
`
