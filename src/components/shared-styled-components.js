import styled from "styled-components"

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  @media (min-width: 768px) {
    min-height: 750px;
  }
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

export const TextParagraph = styled.div`
  position: relative;
  p:first-of-type:before {
    content: "“";
    color: #333333;
    font-size: 40px;
    position: absolute;
    left: 0.2em;
    top: -0.2em;
    font-weight: 600;
  }
  p:last-of-type:after {
    content: "”";
    color: #333333;
    font-size: 40px;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    right: 0.2em;
    bottom: -0.5em;
    font-weight: 600;
  }
  p {
    padding: 1em;
  }
`

export const StyledHeader = styled.h3`
  text-align: start;
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  margin-top: 1em;
`

export const UnstyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
