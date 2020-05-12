import React from "react"
import styled from "styled-components"

import { UnstyledUnorderedList } from "../shared-styled-components"

const StyledToolList = styled(UnstyledUnorderedList)`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(${props => props.size}, 1fr);
  }
`

const StyledEntriesList = styled(UnstyledUnorderedList)`
  margin: auto;
  width: max-content;
`

const StyledToolTitle = styled.h4`
  font-size: 24px;
  font-weight: 400;
`

const StyledToolEntryItem = styled.li`
  text-align: start;
  font-size: 20px;
  font-weight: 300;
`

const StyledToolName = styled.span`
  ::after {
    content: "*";
    display: ${props => (props.experienced ? "none" : "inline")};
  }
`

const StyledAnnotation = styled.span`
  font-size: 16px;
  font-weight: 300;
  text-align: start;
  display: block;
  margin-top: 40px;
`

const ToolEntry = ({ name, icon, experienced }) => {
  const IconSvg = styled(require(`../../assets/${icon}`))`
    height: 1em;
    width: 1em;
    vertical-align: -0.2em;
    margin-right: 0.5em;
  `
  return (
    <StyledToolEntryItem>
      <IconSvg />
      <StyledToolName experienced={experienced}>{name}</StyledToolName>
    </StyledToolEntryItem>
  )
}

const Tools = ({ items }) => (
  <div>
    <StyledToolList size={items.length}>
      {items.map(item => (
        <li key={item.title}>
          <StyledToolTitle>{item.title}</StyledToolTitle>
          <StyledEntriesList>
            {item.items.map(toolItem => (
              <ToolEntry
                key={toolItem.name}
                name={toolItem.name}
                icon={toolItem.icon}
                experienced={toolItem.experienced}
              />
            ))}
          </StyledEntriesList>
        </li>
      ))}
    </StyledToolList>
    <StyledAnnotation>* basic knowledge</StyledAnnotation>
  </div>
)

export default Tools
