import React from "react";
import SectionHeader from "./SectionHeader";
import "./BulletListBlock.css";

const BulletListBlock = ({ text, items }) => (
  <>
    <SectionHeader text={text} />
    <ul className="Container">
      {items.map(function (name, index) {
        return (
          <li className="ListItem" key={index}>
            {name}
          </li>
        );
      })}
    </ul>
  </>
);

export default BulletListBlock;
