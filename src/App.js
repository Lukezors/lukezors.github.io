import React from "react";
import "./css/App.css";
import SectionHeader from "./components/SectionHeader";
import AboutMe from "./components/AboutMe";
import BulletListBlock from "./components/BulletListBlock";
import Separator from "./components/Seperator";
import styled, { createGlobalStyle } from "styled-components";

// .App-link {
//   color: #61dafb;
// }

const CoolBorder = styled.div`
  padding: 16px;
  border: 8px dashed white;
  outline: 8px dashed white;
  outline-offset: 16px;
  margin: 30px 20px;
`;


//Why can't I add the fon't fance declartion here??
const GlobalStyle = createGlobalStyle`
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  body {    
    background-color: #282c34;
    font-size: calc(10px + 2vmin);
    color: white;
    font-family: munro;
  }
`;

const interests = [
  "Web Development",
  "Dogs",
  "Video Games",
  "APIs",
  "Learning",
  "Tabletop RPGs",
  "Board Games",
  "Game Design",
  "Something Else"
];

const skills = ["Java", "Grails", "Javascript", "React", "OAuth", "SQL"];

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <CoolBorder>
        <SectionHeader text="Luke Chamberlain is Learning React and other things!" />
        <Separator />
        <AboutMe />
        <Separator />
        <BulletListBlock text="Interests" items={interests} />
        <Separator />
        <BulletListBlock text="Skills" items={skills} />
      </CoolBorder>
    </React.Fragment>
  );
}

export default App;
