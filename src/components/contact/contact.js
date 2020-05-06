import React from "react"
import styled from "styled-components"

import { GoMarkGithub } from "react-icons/go"
import { GrLinkedin } from "react-icons/gr"
import { MdEmail } from "react-icons/md"

import ColoredSection from "../colored-section"
import { UnstyledUnorderedList } from "../shared-styled-components"

const StyledContactList = styled(UnstyledUnorderedList)`
  margin: 70px auto;
  width: max-content;
`

const ContactItem = styled.li`
  text-align: start;
  font-size: 16px;
  margin: 1em 0;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

const StyledContactLink = styled.a`
  margin-left: 1em;
  text-decoration: none;
  color: white;
`

const StyledIcon = styled.i`
  color: #84a98c;
  * {
    vertical-align: -0.2em;
  }
`

const Contact = () => (
  <ColoredSection title="Contact" backgroundColor="#1f2421" color="#ffffff">
    <StyledContactList>
      <ContactItem>
        <StyledIcon>
          <MdEmail />
        </StyledIcon>
        <StyledContactLink href="mailto:louis.gevers@gmail.com">
          louis.gevers@gmail.com
        </StyledContactLink>
      </ContactItem>
      <ContactItem>
        <StyledIcon>
          <GrLinkedin />
        </StyledIcon>
        <StyledContactLink
          href="https://www.linkedin.com/in/louisgevers"
          target="_blank"
        >
          www.linkedin.com/in/louisgevers
        </StyledContactLink>
      </ContactItem>
      <ContactItem>
        <StyledIcon>
          <GoMarkGithub />
        </StyledIcon>
        <StyledContactLink
          href="https://www.github.com/louisgevers"
          target="_blank"
        >
          www.github.com/louisgevers
        </StyledContactLink>
      </ContactItem>
    </StyledContactList>
  </ColoredSection>
)

export default Contact
