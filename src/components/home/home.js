import React from "react"
import styled from "styled-components"

import FullBackgroundImageSection from "../full-background-image-section"
import MugShot from "./mugshot"
import { BigButton } from "../shared-styled-components"

const SiteTitle = styled.h1`
  font-weight: 300;
  color: white;
  font-size: 48px;
  margin: 0;
  text-align: center;
  b {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 1024px) {
    font-size: 72px;
  }

  @media (min-width: 1280px) {
    font-size: 84px;
  }
`

const Description = styled.h3`
  font-weight: 300;
  color: white;
  margin: 0;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-rows: auto auto auto auto;
`

const DownloadButton = styled(BigButton)`
  margin: 40px 0;
`

const Home = () => (
  <FullBackgroundImageSection>
    <Grid>
      <MugShot />
      <SiteTitle>
        Louis <b>Gevers</b>
      </SiteTitle>
      <Description>Computer Science Student</Description>
      <DownloadButton>download my cv</DownloadButton>
    </Grid>
  </FullBackgroundImageSection>
)

export default Home
