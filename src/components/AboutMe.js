import React from "react";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import logo from "../logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  /* align-items: center; */
`;

const AboutParagraph = styled.p`
  flex-grow: 2;
`;

const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

function AboutMe() {
  // TODO: Figure out how to make the image resize and appear center beside the text, also seems like the text is center but not the image?
  return (
    <React.Fragment>
      <SectionHeader text="About Me" />
      <Container>
        <AppLogo src={logo} alt="logo" />
        <AboutParagraph>
          Hello! I am Luke Chamberlain a senior software developer at Klipfolio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </AboutParagraph>
      </Container>
    </React.Fragment>
  );
}

export default AboutMe;
