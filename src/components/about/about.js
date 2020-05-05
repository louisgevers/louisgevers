import React from "react"

import { TextParagraph } from "../shared-styled-components"
import FlagIcons from "./flag-icons"
import ColoredSection from "../colored-section"

const About = () => (
  <ColoredSection title="about me" backgroundColor="#52796f" color="#ffffff">
    <TextParagraph>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
        velit dignissim sapien pulvinar, mollis molestie massa varius. Donec nec
        sapien neque. Donec sagittis lacus in lorem tristique, in mattis sem
        eleifend. Duis mauris nisi, volutpat non lacus vel, vestibulum commodo
        nisi. Nullam vel elit convallis, viverra lacus non, scelerisque enim.
        Mauris sit amet tristique arcu. Ut ut accumsan dolor.
      </p>
    </TextParagraph>
    <FlagIcons />
  </ColoredSection>
)

export default About
