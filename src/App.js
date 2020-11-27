import React from "react";
import "./App.css";
import SectionHeader from "./components/SectionHeader";
import AboutMe from "./components/AboutMe";
import BulletListBlock from "./components/BulletListBlock";
import Separator from "./components/Seperator";


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
    <>
      <div className='CoolBorder'>
        <SectionHeader text="Luke Chamberlain is Learning React and other things!" />
        <Separator />
        <AboutMe />
        <Separator />
        <BulletListBlock text="Interests" items={interests} />
        <Separator />
        <BulletListBlock text="Skills" items={skills} />
      </div>
    </>
  );
}

export default App;
