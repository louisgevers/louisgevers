import React from "react"
import styled from "styled-components"
import { TextParagraph } from "../shared-styled-components"

const About = () => (
  <section>
    <h2>About me</h2>
    <TextParagraph>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat
        velit dignissim sapien pulvinar, mollis molestie massa varius. Donec nec
        sapien neque. Donec sagittis lacus in lorem tristique, in mattis sem
        eleifend. Duis mauris nisi, volutpat non lacus vel, vestibulum commodo
        nisi. Nullam vel elit convallis, viverra lacus non, scelerisque enim.
        Mauris sit amet tristique arcu. Ut ut accumsan dolor.
      </p>
      <p>
        Mauris pharetra metus tellus, sed ultrices quam suscipit at. Aenean
        porttitor eleifend sapien non luctus. Vivamus eu lectus non diam gravida
        iaculis sed ut ipsum. Maecenas tincidunt lectus eu nibh tempus eleifend.
        Ut vehicula massa sit amet tellus iaculis, eu hendrerit felis viverra.
        Curabitur commodo faucibus elit vel viverra. Vivamus aliquet augue ac
        nisl mollis iaculis. In in congue sapien, sed euismod ante.
      </p>
    </TextParagraph>
    <p>I am fluent in the following languages:</p>
    <ul>
      <li>French (mother tongue)</li>
      <li>Dutch (schooled up until university in dutch, daily use)</li>
      <li>English (academic level, daily use)</li>
    </ul>
  </section>
)

export default About
