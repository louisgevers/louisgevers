import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import { MdKeyboardArrowDown } from "react-icons/md"

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

const ExploreLink = styled(AnchorLink)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  color: white;
  padding-bottom: 60px;
  text-decoration: none;
  :hover {
    * {
      animation: none;
    }
  }
  width: 100%;
`

const ArrowIcon = styled(MdKeyboardArrowDown)`
  position: absolute;
  font-size: 60px;
  bottom: 5px;
  animation: MoveUpDown 1s linear infinite;

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 5px;
    }
    50% {
      bottom: -5px;
    }
  }
`

const Home = () => (
  <div id="home">
    <FullBackgroundImageSection>
      <Grid>
        <MugShot />
        <SiteTitle>
          Louis <b>Gevers</b>
        </SiteTitle>
        <Description>
          Passionate junior software developer skilled in Java, Python, and
          ReactJS with hunger for learning
        </Description>
        <DownloadButton href="https://drive.google.com/uc?export=download&id=17QMiFjSWBcPBaktoVG8iN8zc6IOZjUnN">
          download my cv
        </DownloadButton>
      </Grid>
      <ExploreLink to="/#about" title="About">
        <span>or take a look</span>
        <ArrowIcon />
      </ExploreLink>
    </FullBackgroundImageSection>
  </div>
)

export default Home
