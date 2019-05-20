import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

class BulletListBlock extends React.Component {
  render() {
    const { text, items } = this.props;
    return (
      <React.Fragment>
        <SectionHeader text={text} />
        <ul>
          {items.map(function(name, index) {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default BulletListBlock;
