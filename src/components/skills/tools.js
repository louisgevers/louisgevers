import React from "react"
import styled from "styled-components"

import { UnstyledUnorderedList } from "../shared-styled-components"

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

const ToolEntry = ({ name, icon }) => {
  const IconSvg = styled(require(`../../assets/${icon}`))`
    height: 1em;
    vertical-align: -0.2em;
    margin-right: 0.5em;
  `
  return (
    <StyledToolEntryItem>
      <IconSvg />
      <span>{name}</span>
    </StyledToolEntryItem>
  )
}

const Tools = ({ items }) => (
  <UnstyledUnorderedList>
    {items.map(item => (
      <li key={item.title}>
        <StyledToolTitle>{item.title}</StyledToolTitle>
        <StyledEntriesList>
          {item.items.map(toolItem => (
            <ToolEntry
              key={toolItem.name}
              name={toolItem.name}
              icon={toolItem.icon}
            />
          ))}
        </StyledEntriesList>
      </li>
    ))}
  </UnstyledUnorderedList>
)

export default Tools
