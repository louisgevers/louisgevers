import React from "react"

import { TextParagraph } from "../shared-styled-components"
import FlagIcons from "./flag-icons"
import ColoredSection from "../colored-section"

const About = () => (
  <ColoredSection title="about me" backgroundColor="#52796f" color="#ffffff">
    <TextParagraph>
      <p>
        I am a third year computer science bachelor student at Delft University
        of Technology. Being an avid learner, I enjoy exploring more
        technologies outside of my studies and using the skills I acquired to
        work on personal projects. Well-versed in numerous programming languages
        including Java, Python and JavaScript, I am well equiped to explore
        different areas that are of interest to me, such as machine learning and
        software engineering.
      </p>
      <p>
        Although I am very comfortable developing apps on my own, I love working
        with people. Familiar with Agile Development and Scrum, I value team
        effort and effective communication. I followed public speaking courses
        and had multiple teaching jobs, as I am a firm believer of the
        importance of communicating one's ideas effectively.
      </p>
      <p>
        Computer science aside, I like to spend my free time travelling to
        various places and enjoying board sports (winter or summer), or calmer
        hobbies like reading novels and drawing. I am also fairly interested in
        psychology and anthropology, subjects I love discuss around a beer.
      </p>
    </TextParagraph>
    <FlagIcons />
  </ColoredSection>
)

export default About
