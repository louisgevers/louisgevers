import React from "react"
import styled from "styled-components"

import FullBackgroundImageSection from "../full-background-image-section"
import MugShot from "./mugshot"
import { BigButton } from "../shared-styled-components"

const SiteTitle = styled.h1`
  font-weight: normal;
  color: white;
  font-size: 76px;
  margin: 0;
  text-align: center;
`

const Description = styled.h3`
  font-weight: normal;
  color: white;
  margin: 0;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Home = () => (
  <FullBackgroundImageSection>
    <Grid>
      <MugShot />
      <SiteTitle>
        Louis <b>Gevers</b>
      </SiteTitle>
      <Description>Computer Science Student</Description>
      <BigButton>download my cv</BigButton>
    </Grid>
  </FullBackgroundImageSection>
)

export default Home
