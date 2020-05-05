import React from "react"
import styled from "styled-components"

import { UnstyledUnorderedList } from "../shared-styled-components"

const StyledEntryItem = styled.li`
  display: flex;
  flex-direction: column;
`

const StyledEntryTitle = styled.h4`
  font-size: 28px;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5em;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`

const StyledIcon = styled.span`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: "Material Icons";
  font-size: 50px;
  color: ${props => props.color};
`

const IconBorder = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 40px auto 10px auto;
  border: 3px solid #4d9a9b;
  transform: rotate(45deg);
`

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
`

const ResponsiveGridList = styled(UnstyledUnorderedList)`
  @media (min-width: 768px) {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: ${props => `repeat(${props.size}, 1fr)`};
  }
`

const InterestIcon = ({ iconName, color }) => (
  <IconBorder>
    <IconContainer>
      <StyledIcon color={color}>{iconName}</StyledIcon>
    </IconContainer>
  </IconBorder>
)

const InterestEntry = ({ iconName, title, description, color }) => (
  <StyledEntryItem>
    <InterestIcon iconName={iconName} color={color} />
    <StyledEntryTitle>{title}</StyledEntryTitle>
    <p>{description}</p>
  </StyledEntryItem>
)

const Interests = ({ items }) => (
  <ResponsiveGridList size={items.length}>
    {items.map(item => (
      <InterestEntry
        iconName={item.materialIconName}
        title={item.title}
        description={item.description}
        color={item.color}
      />
    ))}
  </ResponsiveGridList>
)

export default Interests
