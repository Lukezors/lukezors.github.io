import React from "react";
import SectionHeader from "./SectionHeader";
import logo from "../logo.svg";
import './AboutMe.css'

function AboutMe() {
  // TODO: Figure out how to make the image resize and appear center beside the text, also seems like the text is center but not the image?
  return (
    <>
      <SectionHeader text='About Me' />
      <div className='AboutMeContainer'>
        <img className='AppLogo' src={logo} alt="logo" />
        <p className='AboutParagraph'>
          Hello! I am Luke Chamberlain, an intermediate web developer.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
