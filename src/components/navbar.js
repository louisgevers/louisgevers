import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import styled from "styled-components"

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 100;
  background: #1f2421;
  color: white;
  @media (min-width: 768px) {
    background: ${props => (props.topScroll ? "none" : "#1f2421")};
    transition: 0.5s ease;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const NavBox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 20px;
    background-color: #1f2421;
    transition: all 0.3s ease-in;
    top: 60px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: white;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const StyledLink = styled(AnchorLink)`
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  :hover {
    color: #dddddd;
  }
`

const InvisibleButton = styled.button`
  width: min-content;
  height: min-content;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  margin: 0.5em auto;

  :active {
    outline: none;
  }

  @media (min-width: 768px) {
    margin: 0 1em;
  }
`

const NavBarLinks = ({ onLinkClick }) => (
  <>
    <InvisibleButton onClick={onLinkClick}>
      <StyledLink to="/#about" title="about">
        About
      </StyledLink>
    </InvisibleButton>
    <InvisibleButton onClick={onLinkClick}>
      <StyledLink to="/#resume" title="resume">
        Resume
      </StyledLink>
    </InvisibleButton>
    <InvisibleButton onClick={onLinkClick}>
      <StyledLink to="/#skills" title="skills">
        Skills
      </StyledLink>
    </InvisibleButton>
    <InvisibleButton onClick={onLinkClick}>
      <StyledLink to="/#contact" title="contact">
        Contact
      </StyledLink>
    </InvisibleButton>
  </>
)

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [topScroll, setTopScroll] = useState(
    typeof window !== `undefined` ? window.pageYOffset === 0 : true
  )
  if (typeof window !== `undefined`) {
    window.addEventListener("scroll", () => {
      if (topScroll !== (window.pageYOffset === 0)) {
        setTopScroll(window.pageYOffset === 0)
      }
    })
  }
  return (
    <StyledNav topScroll={topScroll}>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavBox>
          <NavBarLinks onLinkClick={() => setNavbarOpen(!navbarOpen)} />
        </NavBox>
      ) : (
        <NavBox open>
          <NavBarLinks />
        </NavBox>
      )}
    </StyledNav>
  )
}

export default NavBar
